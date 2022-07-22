const List = require('../../models/user')

const ListUserService = {
    listUser: () => {
      const user = new User(
        1,
        id, 
        'nome', 
        'senha', 
        'data de nascimento', 
        'CPF', 
        'telefone', 
        'endereço', 
        'e-mail', 
        'CEP', 
        'bairro', 
        'cidade',
        'estado'
      )
      const user2 = new User(
        2,
        id, 
        'nome', 
        'senha', 
        'data de nascimento', 
        'CPF', 
        'telefone', 
        'endereço', 
        'e-mail', 
        'CEP', 
        'bairro', 
        'cidade',
        'estado'
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