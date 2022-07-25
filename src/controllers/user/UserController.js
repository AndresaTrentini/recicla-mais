
const DeleteUserService = require('../../services/user/DeleteUserService');

const controller = {
    
    delete: (request, response) => {
        const { id } = request.params

        const resultado = DeleteUserService.delete(id)

        response.send(resultado)
    }
}

module.exports = controller;