import TimetableModel from "../../models/TimetableModel"

class UpdateTimetableService {
    constructor() { }

    static async update(id, days, start, end) {
        try {
            const findTable = await TimetableModel.findOne({ where: { id } })

            if (!findTable) {
                return { status: 400, success: false, message: "Tabela não encontrada" }
            }

            await findTable.update({ days, start, end })

            return { status: 200, success: true, message: "Tabela atualizada com sucesso." }
            
        } catch (err) {
            return { status: 400, success: false, message: err.message }
        }
    }
}

export default UpdateTimetableService