import AddressModel from "../../models/AddressModel";

class ListAddressService {
    constructor() { }

    static async listAll(user_id, adm) {
        try {
            if (adm ===1){
            const addresses = await AddressModel.findAll()
            return { status: 200, success: true, addresses } 
        }
            const user_addresses = await AddressModel.findAll({where: {user_id}})
            return { status: 200, success: true, user_addresses } 
        } catch (err) {
            return { status: 400, success: false, message: err.message }
        }
    }


    static async listById(id, user_id, adm) {
        try {
            if (adm ===1){
            const address = await AddressModel.findOne({ where: { id } })
            if (!address) {
                return { status: 400, success: false, message: "Endereço não encontrado." }
            }
            return { status: 200, success: true, address }
        }     
        const user_address = await AddressModel.findOne({where: {user_id, id}})
        if (!user_address) {
            return { status: 400, success: false, message: "Endereço não encontrado." }
        }
        return { status: 200, success: true, user_address } 
        } catch (err) {
            return { status: 400, success: false, message: err.message }
        }
    }
}

export default ListAddressService 