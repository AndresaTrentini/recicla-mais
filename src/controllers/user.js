const ListUserService = require('../services/user/list')

const controller = {
    index: (request, response) => {
      const listUser = ListUserService.listUserService()
      response.json(listUser)
    },
    ListData: (request, response) => {
        const { name } = request.query;
    
        if (!name) {
          return response.status(400).json({ "erro": "Você não informou um nome" })
        }
    
        const legendary = ListUserService.listUserData(name);
    
        return response.json(user)
      }
   
    }

    module.exports = controller;