import CreateSchedulingService from "../../services/scheduling/CreateScheduligService";
import createdSchedulingEmail from "../../services/sendEmail/createdSchedulingEmail";

class CreateSchedulingController {
    constructor() { }

    static async create(req, res) {
        try {
            const { address_id, service_id, scheduled_date, quantity } = req.body
            const user_id = req.user.id

            const schedule = await CreateSchedulingService.create(user_id, address_id, service_id, scheduled_date, quantity)

            res.status(schedule.status).json(schedule)

            if (schedule.success) {
                createdSchedulingEmail(schedule.user.name, schedule.user.email, schedule.service.material, schedule.scheduling.scheduled_date)
            }

        } catch (err) {
            res.status(err.status).json(err)
        }
    }
}

export default CreateSchedulingController
