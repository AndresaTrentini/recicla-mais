
const DeleteUserService = require('../../services/user/DeleteUserService');

const controller = {
    index: (request, response) => {
         const listUsers = ListUsersService.listUsersService()
         response.json(listUsers)
    },
    delete: (request, response) => {
        const { id } = request.params

        const resultado = DeleteUserService.delete(id)

        response.send(resultado)
    }
}

module.exports = controller;