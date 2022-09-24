import nodeSchedule from "node-schedule"
import StatModel from "../models/StatisticModel"
import UserModel from "../models/UserModel"
import SchedulingModel from "../models/SchedulingModel"
import { Op } from "sequelize"

export default () => {
    nodeSchedule.scheduleJob(process.env.STATS_RULE, async function () {
        try {
            const totalUsers = await UserModel.count({ paranoid: false })
            const activeUsers = await UserModel.count()
            const totalSchedule = await SchedulingModel.count({ paranoid: false })
            const completeSchedule = await SchedulingModel.count({ where: { completed: 1 } })
            const canceledSchedule = await SchedulingModel.count({ where: { deletedAt: { [Op.ne]: null } }, paranoid: false })

            const lastStat = await StatModel.findOne({}, {}, { sort: { createdAt: - 1 } })

            const stat = new StatModel({
                totalUsers, activeUsers, totalSchedule, completeSchedule,
                canceledSchedule, createdAt: new Date()
            })

            const changeTotalUsers = !lastStat || stat.totalUsers !== lastStat.totalUsers
            const changeActiveUsers = !lastStat || stat.activeUsers !== lastStat.activeUsers
            const changeTotalSchedule = !lastStat || stat.totalSchedule !== lastStat.totalSchedule
            const changeCompleteSchedule = !lastStat || stat.completeSchedule !== lastStat.completeSchedule
            const changeCanceledSchedule = !lastStat || stat.canceledSchedule !== lastStat.canceledSchedule

            if (changeTotalUsers || changeActiveUsers ||
                changeTotalSchedule || changeCompleteSchedule ||
                changeCanceledSchedule) {
                stat.save().then(() => console.log('[Stats] Estatísticas atualizadas!'))
            }
        } catch (err) {
            console.log('[Erro Stats]: ', err.message)
        }
    })
}
