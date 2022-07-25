const fs = require('fs')
const path = 'src/app/Database/User.json'
const users = JSON.parse(fs.readFileSync(path, 'utf-8'))


//const ListUserService = require("../../services/user/ListUserService") //verificar o uso do list

const UpdateUserService = {
    update: (
        id,
        name,
        password,
        birthData,
        cpf,
        telephone,
        address,
        email,
        adm
    ) => {
        const users = ListUserService.listUserService()
        const userIndice = user.findIndex(item => item.id === Number(id))

        if (UserIndex === -1) {
            return { erro: "Usuario não encontrado" }
        }

        users[userIndex] = {
            id,
            name,
            password,
            birthData,
            cpf,
            telephone,
            address,
            email,
            adm
        }

        fs.writeFileSync(path, JSON.stringify(userIndex))
        return { status: 200, mensagem: userIndex[index] }
    }
}



module.exports = UpdateUserService