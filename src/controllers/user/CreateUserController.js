import CreateUserService from "../../services/user/CreateUserService";
import createdAccountEmail from "../../services/sendEmail/createdAccountEmail";
class CreateUserController {
  constructor() { }

  static async create(request, response) {
    const { name, password, birthData, cpf, telephone, email } = request.body
    let { adm } = request.body

    if (!request.originalUrl.startsWith('/users')) adm = 0
    if (!request.user || !request.user.adm) adm = 0

    const service = new CreateUserService()
    const user = await service.create(name, birthData, cpf, telephone, email, password, adm)

    response.status(user.status).json(user)

    if (user.success) {
      createdAccountEmail(user.newUser.name, user.newUser.email)
    }
  }
}

export default CreateUserController