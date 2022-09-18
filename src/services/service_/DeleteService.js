import ServiceModel from "../../models/ServiceModel";

class DeleteService {
    constructor() { }

    static async delete(id) {
        try {

            const service = await ServiceModel.findByPk(id)

            if (!service) {
                return { status: 400, success: false, message: "Serviço não encontrado." }
            }

            await service.destroy()

            return { status: 200, success: true, message: "Serviço excluído com sucesso" }

        } catch (err) {
            return { status: 500, success: false, message: err.message }
        }
    }
}

export default DeleteService