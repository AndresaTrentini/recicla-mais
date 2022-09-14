import UserModel from '../../models/UserModel'
import utils from "../../utils/utils"

export default class UpdateUserService {
    constructor() { }

    static async updatePassword(id, oldPassword, newPassword) {

        let user = await UserModel.findOne({ where: { id} })

        if (!user) {
            return {
                success: false,
                status: 400,
                message: "Usuario não encontrado",
            };
        }

        const isMatch = utils.isMatchPassword(oldPassword, user.password)
        if (!isMatch) return {success: false, status: 400, message: 'Senha anterior incorreta.' }
        
        const password = utils.encryptPassword(newPassword)
        user = await UserModel.update({ password }, { where: { id } });

        return {
            success: true,
            status: 200,
            message: "Senha atualizada com sucesso."            
        };
    }
}

