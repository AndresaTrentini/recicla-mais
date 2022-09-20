import UpdateTimetableService from "../../services/timetable/UpdateTimetableService"

class UpdateTimetableController {
    constructor() { }

    static async update(req, res) {
        try {
            const { id } = req.params
            const { days, start, end } = req.body
            const timetable = await UpdateTimetableService.update(id, days, start, end)

            res.status(timetable.status).json(timetable)

        } catch (err) {
            res.status(err.status).json(err)
        }
    }

}

export default UpdateTimetableController