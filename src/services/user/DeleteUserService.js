import { readFileSync, writeFileSync } from 'fs'
const path = 'src/services/user/dbUser.json'
const users = JSON.parse(readFileSync(path, 'utf-8'))

const DeleteUserService = {
    delete: (id) => {
        
        const userIndice = users.findIndex(item => item.id === id)

        if(userIndice === -1){
            return { erro: "Usuário não encontrado"        
        }

        }
         users.splice(userIndice, 1)
         writeFileSync(path, JSON.stringify(users))

         return { mensagem: "Usuário removido com sucesso"}
    }
}

export default DeleteUserService
