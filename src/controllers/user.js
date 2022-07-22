const ListUserService = require('../services/user/list')

const controller = {
    index: (request, response) => {
      const listUser = ListUserService.listUserService()
      response.json(listUser)
    }
   
    }

    module.exports = controller;