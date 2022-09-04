import UserModel from '../../models/UserModel'
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

        const emailConfirm = UserModel.findOne({ where: { email: email } })
        if (emailConfirm) {
            return {
                sucess: false,
                message: "Email já cadastrado no sistema",
            };
        }
        user = await UserModel.update({ where: { id: id } }, { name, password, birthData, telephone, email });

        return {
            sucess: true,
            message: user,
        };
    }
}

