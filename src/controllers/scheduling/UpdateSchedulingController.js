import UpdateSchedulingService from "../../services/scheduling/UpdateSchedulingService"

class UpdateScheduling {
    constructor() { }

    static async update(req, res) {
        try {
            const { id, scheduled_date } = req.body
            const user_id = req.user.id

            const scheduling = await UpdateSchedulingService.update(id, scheduled_date, user_id)

            res.status(scheduling.status).json(scheduling)
        } catch (err) {
            return res.status(err.status).json(err)
        }
    }
}


export default UpdateScheduling