import DaysAvailableSchedulingService from "../../services/scheduling/DaysAvailableSchedulingService"

class DaysAvailableSchedulingController {
    constructor() { }

    static async list(req, res) {
        try {
            const { data, service_id } = req.body
            const days = await DaysAvailableSchedulingService.list(data, service_id)

            res.status(days.status).json(days)
        } catch (err) {
            
            res.status(days.status).json(days)
        }
    }
}

export default DaysAvailableSchedulingController