import TimetableModel from "../../models/TimetableModel"

class DeleteTimetableService {
    constructor() { }

    static async delete(id) {
        try {
            const findTable = await TimetableModel.findOne({ where: { id } })

            if (!findTable) {
                return { status: 400, success: false, message: "Tabela não encontrada" }
            }

            await findTable.destroy()

            return { status: 200, success: true, message: "Tabela excluída com sucesso." }
            
        } catch (err) {
            return { status: 400, success: false, message: err.message }
        }
    }
}

export default DeleteTimetableService