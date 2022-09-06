import UserModel from '../../models/UserModel'
import utils from "../../utils/utils"
export default class UpdateUserService {
    constructor() { }

    static async update(id,
        name,
        password,
        birthData,
        telephone,
        email) {
        let user = await UserModel.findOne({ where: { id: id } })

        if (!user) {
            return {
                sucess: false,
                message: "Usuario não encontrado",
            };
        }

        const emailConfirm = await UserModel.findOne({ where: { email: email } })

        if (emailConfirm && emailConfirm.id !== id) {
            return {
                sucess: false,  
                message: "Email já cadastrado no sistema",
            };
        }

        password = utils.encryptPassword(password)
        user = await UserModel.update({ name, password, birthData, telephone, email }, { where: { id } });

        return {
            sucess: true,
            message: "Cadastro atualizado",
            user
        };
    }
}

