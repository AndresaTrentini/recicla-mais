import SchedulingModel from "../../models/SchedulingModel";
import utils from "../../utils/utils"


class DeleteSchedulingService {
    constructor() { }

    static async delete(id, user) {

        try {
            const scheduling = await SchedulingModel.findByPk(id)

            if (!scheduling) {
                return { status: 400, success: false, message: "Agendamento não encontrado." }
            }

            if (user.adm == 0 && scheduling.user_id !== user.id) {
                return { status: 400, success: false, message: "Agendamento não pertence a esse usuário." }
            }

            if (scheduling.completed == 1) {
                return { status: 400, success: false, message: "Agendamento não pode alterado pois está concluído." }
            }

            const diffTime = utils.diffTime(scheduling.scheduled_date)
            if (!diffTime) {
                return { status: 400, success: false, message: "Agendamento não pode ser cancelado faltando menos de 24 horas para a coleta." }
            }

            await (await scheduling.update({ completed: 1 }, { where: { id } })).destroy()

            return { status: 200, success: true, message: "Agendamento cancelado com sucesso.", scheduling }

        } catch (err) {
            return { status: 500, message: err.message }
        }
    }
}

export default DeleteSchedulingService