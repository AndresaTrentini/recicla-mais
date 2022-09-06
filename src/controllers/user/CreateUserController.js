import CreateUserService from "../../services/user/CreateUserService";

class CreateUserController {
    constructor() { }

    static async create (request, response) {
        const { name, password, birthData, cpf, telephone, email} = request.body
        let { adm } = request.body

        if (!request.originalUrl.startsWith('/users')) adm = 0
        if (!request.user || !request.user.adm) adm = 0

        const service = new CreateUserService()
        const user = await service.create(name, birthData, cpf, telephone, email, password, adm)
    
        response.status(user.status).json(user)
      }
}

export default CreateUserController