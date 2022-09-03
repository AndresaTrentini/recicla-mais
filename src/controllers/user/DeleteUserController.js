import DeleteUserService from "../../services/user/DeleteUserService";

export default class DeleteUserController {
    constructor() {
        this.service = new DeleteUserService();
    }

    async delete(request, response) {
        const { id } = request.params;

        const resultado = await this.service.delete(id);

        response.json(resultado);
    }
}