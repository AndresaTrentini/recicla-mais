import UserModel from "../../models/UserModel"

export default class DeleteUserService {
    constructor() { }
    async delete(id) {
        try {
            const user = await UserModel.findByPk(id);
            if (!user) {
                return {
                    status: 400, message: "Usuário não encontrado", success: false
                };
            }
            const userDeleted = await user.destroy();
            return { status: 200, message: "Usuário deletado", userDeleted, success: true };
        } catch (error) {

            return { message: error.message, success: false };
        }
    }
}
