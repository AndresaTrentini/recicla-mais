import ServiceModel from "../../models/ServiceModel";
import { Op } from "sequelize"

class ListService {
    constructor() { }

    static async listAll(adm) {
        try {
            const status = adm === 0 ? 1 : { [Op.not]: null }
            const services = await ServiceModel.findAll({
                where: { status: status }
            })

            if (services.length < 1) {
                return { status: 400, success: false, message: "Nenhum serviço disponível." }
            }

            return { status: 200, success: true, services }

        } catch (err) {
            return { status: 500, success: false, message: err.message }
        }
    }

    static async listById(adm, id) {
        try {
            const status = adm === 0 ? 1 : { [Op.not]: null }
            const service = await ServiceModel.findOne({                
                where: { id, status: status }
            })

            if (!service) {
                return { status: 400, success: false, message: "Serviço indisponível." }
            }

            return { status: 200, success: true, service }

        } catch (err) {
            return { status: 500, success: false, message: err.message }
        }
    }
}

export default ListService