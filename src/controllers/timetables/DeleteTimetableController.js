import DeleteTimetableService from "../../services/timetable/DeleteTimetableService"

class DeleteTimetableController {
    constructor() { }

    static async delete(req, res) {
        try {
            const timetable = await DeleteTimetableService.delete(req.params.id)

            res.status(timetable.status).json(timetable)

        } catch (err) {
            res.status(err.status).json(err)
        }
    }

}

export default DeleteTimetableController