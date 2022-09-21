import AddressModel from "../../models/AddressModel";

class UpdateAddressService {
    constructor() { }

    static async update(id, street, district, city, state, country, zip, number, user_id) {
        try {
            const findAddress = await AddressModel.findOne({ where: { id, user_id} })

            if (!findAddress) {
                return { status: 400, success: false, message: "Endereço não encontrado" }
            }

            await findAddress.update({street, district, city, state, country, zip, number })

            return { status: 200, success: true, message: "Endereço atualizado com sucesso." }
            
        } catch (err) {
            return { status: 400, success: false, message: err.message }
        }
    }
}

export default UpdateAddressService