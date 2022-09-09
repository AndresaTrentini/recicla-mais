import DeleteUserService from "../../services/user/DeleteUserService";

export default class DeleteUserController {
    constructor() {
        this.service = new DeleteUserService();
    }

    async delete(request, response) {
        if (request.user.adm == 1){
            const { id } = request.params;}

        const {id} = request.user

        const resultado = await this.service.delete(id);

        response.json(resultado);
    }
}