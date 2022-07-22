const UserModel = require("../../models/user");
const { v4 } = require("uuid");
const fs = require('fs')
const path = 'src/app/service/user/dbUser.json'
const users = JSON.parse(fs.readFileSync(path, 'utf-8'))


const CreateUserService = { 
    createUser : (
        name,
        password,
        birthData,
        cpf,
        telephone,
        address,
        email,
        adm
    ) =>{
        // if(name.length <= 2){
        //     return {status:400, mensagem:"Informe um nome válido com 2 ou mais letras "}
        // }
        // if(idade <= 17){
        //     return {status:400, mensagem:"idade não permitida"}
        // }
        // if(cpf.length <= 10){
        //     return {status:400, mensagem:"cpf inválido"}
        // }
        const User = new UserModel(
            v4(),
            name,
            password,
            birthData,
            cpf,
            telephone,
            address,
            email,
            adm
        )
        users.push(User)
        fs.writeFileSync(path, JSON.stringify(users))
        return {status:200, mensagem:User}
    }
}

module.exports = CreateUserService