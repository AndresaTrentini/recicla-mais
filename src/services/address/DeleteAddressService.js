import AddressModel from "../../models/AddressModel";

class DeleteAddressService {
    constructor () {}
    static async delete(id, user) {
        try {
            const findAddress = await AddressModel.findOne({ where: { id } })
            if (user.adm == 0 && address.user_id !== user.id) {
                return { status: 400, success: false, message: "Endereço não pertence a esse usuário." }
            }

            if (!findAddress) {
                return { status: 400, success: false, message: "Endereço não encontrado" }
            }

            await findAddress.destroy()

            return { status: 200, success: true, message: "Endereço excluído com sucesso." }
            
        } catch (err) {
            return { status: 400, success: false, message: err.message }
        }
    }
}

export default DeleteAddressService
