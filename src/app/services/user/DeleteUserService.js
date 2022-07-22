// const ListUserService = require("./user/ListUserService")

const DeleteUserService = {
    delete: (id) => {
        // const users = ListUserService.listUserService()
        const userIndice = users.findIndex(item => item.id === Number(id))

        if(userIndice === -1){
            return { erro: "Usuário não encontrado"
        
                //    sucess: false,
                //    message: "Usuário não encontrado" 
        }

        }
         users.splice(userIndice, 1)

         return { mensagem: "Usuário removido com sucesso"}
    }
}

module.exports = DeleteUserService

// routes.delete('/users/:id', controller.delete);