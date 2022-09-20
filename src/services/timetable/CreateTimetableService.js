import TimetableModel from "../../models/TimetableModel"
import ServiceModel from "../../models/ServiceModel"

class CreateTimetableService {
    constructor() { }

    static async create(days, start, end, service_id) {
        try {
            const findServiceIntable = await TimetableModel.findOne({ where: { service_id } })

            if (findServiceIntable) {
                return { status: 400, success: false, message: "Serviço já possui tabela de horário." }
            }

            const findService = await ServiceModel.findOne({ where: { id: service_id } })
            if (!findService) {
                return { status: 400, success: false, message: "Serviço não encontrado." }
            }

            const timetable = await TimetableModel.create({ days, start, end, service_id })
            return { status: 201, success: true, message: "Tabela cadastrada com sucesso.", timetable }

        } catch (err) {
            return { status: 400, success: false, message: err.message }
        }
    }
}

export default CreateTimetableService