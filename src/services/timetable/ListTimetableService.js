import TimetableModel from "../../models/TimetableModel"

class ListTimetableService {
    constructor() { }

    static async listAll() {
        try {
            const timetables = await TimetableModel.findAll()
            return { status: 200, success: true, timetables }
        } catch (err) {
            return { status: 400, success: false, message: err.message }
        }
    }

    static async listById(id) {
        try {
            const timetable = await TimetableModel.findOne({ where: { id } })

            if (!timetable) {
                return { status: 400, success: false, message: "Tabela não encontrada." }
            }
            return { status: 200, success: true, timetable }
        } catch (err) {
            return { status: 400, success: false, message: err.message }
        }
    }
}

export default ListTimetableService 