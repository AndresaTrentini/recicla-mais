import CreateUserService from "../services/user/create";
import DeleteUserService from '../services/user/DeleteUserService';
import ListUserService from '../services/user/list';
import UpdateUserService from '../services/user/UpdateUserService';

const userController = {
  create: (request, response) => {
    const { name, password, birthData, cpf, telephone, address, email} = request.body
    let { adm } = request.body

    if (!request.originalUrl.startsWith('/users')) adm = false
    if (!request.user || !request.user.adm) adm = false

    const user = CreateUserService(name, birthData, cpf, telephone, email, address, password, adm)

    response.status(user.status).json(user)
  },

  list: (request, response) => {
    const listUser = ListUserService.listUser()
    response.json(listUser)
  },
  ListById: (request, response) => {
    const { id } = request.params;
    
    const user = ListUserService.listUserById(id);

    return response.status(user.status).json(user)
  },

  destroy: (request, response) => {
    const { id } = request.params

    const resultado = DeleteUserService.delete(id)

    response.send(resultado)
  },

  update: (request, response) => {
    const { id } = request.params

    const { name, password, birthData, cpf, telephone, address, email, adm } = request.body

    const user = UpdateUserService.update(id, name, password, birthData, cpf, telephone, address, email, adm)

    response.status(user.status).json(user.mensagem)
  }
}

export default userController
