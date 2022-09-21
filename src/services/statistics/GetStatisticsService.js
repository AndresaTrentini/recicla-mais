import StatModel from "../../models/StatisticModel";

class GetStatisticService {
    constructor() { }

    static async get() {
        try {
            const defaultStats = {
                totalUsers: 0,
                activeUsers: 0,
                totalSchedule: 0,
                completeSchedule: 0,
                canceledSchedule: 0,
            }
            const stats = await StatModel.findOne({}, {}, { sort: { 'createdAt': -1 } })

            return { status: 200, success: true, stats: stats || defaultStats}
        } catch (err) {
            return { status: 500, success: false, message: err.message }
        }

    }
}

export default GetStatisticService