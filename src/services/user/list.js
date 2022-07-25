const fs = require('fs')

const path =  'src/app/service/user/dbUser.json'
const user = JSON.parse(fs.readFileSync(path, 'utf-8'))

const ListUserService = {
    listUser: () => {
      return user
    }
  }
  
  module.exports = ListUserService;