const fs = require('fs')
const path = 'src/app/service/user/dbUser.json'
const users = JSON.parse(fs.readFileSync(path, 'utf-8'))

const DeleteUserService = {
    delete: (id) => {
        
        const userIndice = users.findIndex(item => item.id === Number(id))

        if(userIndice === -1){
            return { erro: "Usuário não encontrado"
        
                //    sucess: false,
                //    message: "Usuário não encontrado" 
        }

        }
         users.splice(userIndice, 1)
         fs.writeFileSync(path, JSON.stringify(users))

         return { mensagem: "Usuário removido com sucesso"}
    }
}

module.exports = DeleteUserService

// routes.delete('/users/:id', controller.delete);