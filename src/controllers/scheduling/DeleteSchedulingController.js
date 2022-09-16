import DeleteSchedulingService from "../../services/scheduling/DeleteSchedulingService"

class DeleteSchedulingController {
    constructor() { }

    static async delete(req, res) {

        try {
            const { id } = req.params
            const user = req.user

            const deleteScheduling = await DeleteSchedulingService.delete(id, user)

            res.status(deleteScheduling.status).json(deleteScheduling)
        } catch (err) {
            return res.status(400).json(err)
        }
    }
}

export default DeleteSchedulingController