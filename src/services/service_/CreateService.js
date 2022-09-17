import ServiceModel from "../../models/ServiceModel";

class CreateService {
    constructor() { }

    static async create(material, unit, min, max) {
        try {

            const findService = await ServiceModel.findOne({
                where: { material }
            })            

            if (findService) {
                return { status: 400, success: false, message: "Material já cadastrado no sistema." }
            }            

            const newService = await ServiceModel.create({ material, unit, min, max })

            return { status: 201, success: true, newService }

        } catch (err) {
            
            return { status: 500, success: false, message: err.message }
        }
    }
}

export default CreateService