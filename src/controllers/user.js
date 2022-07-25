const CreateUserService = require("../services/user/create");

const userController = {
    create: (request, response) => {
        const { name, password, confirmPassword, birthData, cpf, telephone, address, email, adm
          
        } = request.body
    
        const user = CreateUserService (name, birthData, cpf, telephone, email, address, password, adm)
    
        response.status(user.status).json(user.message)
      },

      index: (request, response) => {
        const listUser = ListUserService.listUserService()
        response.json(listUser)
      },
      ListData: (request, response) => {
          const { name } = request.query;
      
          if (!name) {
            return response.status(400).json({ "erro": "Você não informou um nome" })
          }
      
          const user = ListUserService.listUserData(name);
      
          return response.json(user)
        }
}

module.exports = userController
