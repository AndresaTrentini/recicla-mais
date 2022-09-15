import DaysAvailableSchedulingService from "../../services/scheduling/DaysAvailableSchedulingService"

class DaysAvailableSchedulingController {
    constructor() { }

    static async list(req, res) {
        try {            
            const { service_id } = req.params
            const data = !req.query.data ? new Date() : req.query.data          
            
            const days = await DaysAvailableSchedulingService.list(data, service_id)

            res.status(days.status).json(days)
        } catch (err) {
            
            res.status(days.status).json(days)
        }
    }
}

export default DaysAvailableSchedulingController