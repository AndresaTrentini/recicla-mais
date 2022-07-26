const CreateUserService = require("../services/user/create");
const DeleteUserService = require('../services/user/DeleteUserService');
const ListUserService = require('../services/user/list')
const UpdateUserService = require('../services/user/UpdateUserService')

const userController = {
  create: (request, response) => {
    const { name, password, birthData, cpf, telephone, address, email, adm

    } = request.body

    if (!req.originalUrl.startsWith('/users')) adm = false
    if (!req.user || !req.user.adm) adm = false

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

  delete: (request, response) => {
    const { id } = request.params

    const resultado = DeleteUserService.delete(id)

    response.send(resultado)
  },

  update: (request, response) => {
    const { id } = request.params

    const { name, password, birthData, cpf, telephone, address, email, adm } = request.body

    const user = UpdateUserService(id, name, password, birthData, cpf, telephone, address, email, adm)

    response.status(user.status).json(user.mensagem)
  }
}

module.exports = userController
