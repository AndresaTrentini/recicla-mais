import CreateTimetableService from "../../services/timetable/CreateTimetableService"

class CreateTimetableController {
    constructor() { }

    static async create(req, res) {
        try {
            const { days, start, end, service_id } = req.body
            
            const timetable = await CreateTimetableService.create(days, start, end, service_id)

            res.status(timetable.status).json(timetable)
        } catch (err) {
            res.status(err.status).json(err)
        }
    }
}

export default CreateTimetableController