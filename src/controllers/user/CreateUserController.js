import CreateUserService from "../../services/user/CreateUserService";

class CreateUserController {
    constructor() { }

    static async create (request, response) {
        const { name, password, birthData, cpf, telephone, address, email} = request.body
        let { adm } = request.body
    
        if (!request.originalUrl.startsWith('/users')) adm = false
        if (!request.user || !request.user.adm) adm = false
    
        const user = await CreateUserService.create(name, birthData, cpf, telephone, email, address, password, adm)
    
        response.status(user.status).json(user)
      }
}

export default CreateUserController