import GetStatisticService from "../../services/statistics/GetStatisticsService"

class GetStatisticController {
    constructor() { }

    static async get(req, res) {
        try {
            const stats = await GetStatisticService.get()
            res.status(stats.status).json(stats)
        } catch (err) {
            res.status(err.status).json(err)
        }
    }
}

export default GetStatisticController