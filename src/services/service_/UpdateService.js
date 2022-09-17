import ServiceModel from "../../models/ServiceModel";

class UpdateService {
    constructor() { }

    static async update(id, material, min, max) {
        try {

            //recuperar serviço
            const findService = await ServiceModel.findByPk(id)

            if(!findService){
                return { status: 400, success: false, message: "Serviço não encontrado." }
            }

            //verificar se nome do material já não está cadastrado em outro id
            const findMaterial = await ServiceModel.findOne({
                where: { material },
                attributes: ['id']                
            })

            if (findMaterial && findMaterial.id !== id) {
                return { status: 400, success: false, message: "Material já cadastrado no sistema." }
            }            

            //atualizar serviço
            await findService.update({ material, min, max })

            return { status: 200, success: true, message: "Serviço atualizado com sucesso" }

        } catch (err) {            
            return { status: 500, success: false, message: err.message }
        }
    }
}

export default UpdateService