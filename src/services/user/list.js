const fs = require('fs')
const path =  'src/app/service/user/dbUser.json'
const user = JSON.parse(fs.readFileSync(path, 'utf-8'))

const ListUserService = {
    listUser: () => {
      const user = new User(
        1,
        id,
        'name',
        'password',
        'birthData',
        'cpf',
        'telephone',
        'address',
        'email',
        'adm'
      )
      const user2 = new User(
        2,
        id, 
        'name',
        'password',
        'birthData',
        'cpf',
        'telephone',
        'address',
        'email',
        'adm'
      )
  
      return [user, user2]
    },
    listUserData: (UserName) => {
      const userList = ListUserService.listUserService();
      const user = userList.find(item => item.name === userName);
      return user
    }
  }
  
  module.exports = ListUserService;