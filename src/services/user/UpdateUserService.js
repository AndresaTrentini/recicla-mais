import UserModel from '../../models/UserModel'
import utils from "../../utils/utils"
export default class UpdateUserService {
    constructor() { }

    static async update(id,
        name,        
        telephone,
        email) {
        let user = await UserModel.findOne({ where: { id: id } })

        if (!user) {
            return {
                success: false,
                status: 400,
                message: "Usuario não encontrado",
            };
        }

        const emailConfirm = await UserModel.findOne({ where: { email: email } })

        if (emailConfirm && emailConfirm.id !== id) {
            return {
                success: false,
                status: 400,
                message: "Email já cadastrado no sistema",
            };
        }

        user = await UserModel.update({ name, telephone, email }, { where: { id } });

        return {
            sucess: true,
            status: 200,
            message: "Cadastro atualizado com sucesso",
            user
        };
    }
}

