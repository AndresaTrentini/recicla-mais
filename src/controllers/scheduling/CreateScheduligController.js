import CreateSchedulingService from "../../services/scheduling/CreateScheduligService";

class CreateSchedulingController {
    constructor() { }

    static async create(req, res) {
        try {
            const { user_id, address_id, service_id, scheduled_date, quantity } = req.body

            const schedule = await CreateSchedulingService.create(user_id, address_id, service_id, scheduled_date, quantity)

            res.status(schedule.status).json(schedule)
        
        } catch (err) {
            res.status(err.status).json(err)
        }
    }
}

export default CreateSchedulingController