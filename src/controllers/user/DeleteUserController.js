import DeleteUserService from "../../services/user/DeleteUserService";

export default class DeleteUserController {
    constructor() {
        this.service = new DeleteUserService();
    }

    async delete(request, response) {
        
        const id = request.user.adm == 1 ? request.params.id: request.user.id

        const user = await this.service.delete(id);

        response.status(user.status).json(user);
    }
}