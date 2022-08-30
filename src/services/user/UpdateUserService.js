import { readFileSync, writeFileSync } from 'fs'
const path = 'src/services/user/dbUser.json'
const users = JSON.parse(readFileSync(path, 'utf-8'))


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
        const UserIndex = users.findIndex(item => item.id === Number(id))

        if (UserIndex === -1) {
            return { status: 400, mensagem: "Usuario não encontrado" }
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

        writeFileSync(path, JSON.stringify(users))
        return { status: 200, mensagem: userIndex[index] }
    }
}



export default UpdateUserService