import ListTimetableService from "../../services/timetable/ListTimetableService"

class ListTimetableController {
    constructor() { }

    static async listAll(req, res) {
        try {
            const timetables = await ListTimetableService.listAll()
            res.status(timetables.status).json(timetables)
        } catch (err) {
            res.status(err.status).json(err)
        }
    }

    static async listById(req, res) {
        try {
            const timetable = await ListTimetableService.listById(req.params.id)
            res.status(timetable.status).json(timetable)
        } catch (err) {
            res.status(err.status).json(err)
        }
    }
}

export default ListTimetableController