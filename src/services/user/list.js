import { readFileSync } from 'fs'

const path =  'src/services/user/dbUser.json'
const users = JSON.parse(readFileSync(path, 'utf-8'))

const ListUserService = {
    listUser: () => {
      return users
    },

    listUserById: (id) => {

      const user = users.find(user => user.id == id)

      if(!user) {
        return {status: 400, mensagem: 'Usuário não encontrado.'}
      }

      return {status: 200, mensagem: 'Usuário encontrado', data: user}

    }
  }
  
  export default ListUserService;