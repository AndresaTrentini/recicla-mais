const CreateUserService = require("../services/user/create");

const userController = {
    create: (request, response) => {
        const { name, password, confirmPassword, birthData, cpf, telephone, address, email, adm
          
        } = request.body
    
        const user = CreateUserService (name, birthData, cpf, telephone, email, address, password, adm)
    
        response.status(user.status).json(user.message)
      }
}

module.exports = userController
