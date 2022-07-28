const { v4 } = require("uuid")
const userModel = require("../../models/user")
const bcrypt = require("bcrypt-nodejs")
const fs = require('fs')

const path =  'src/services/user/dbUser.json'
const users = JSON.parse(fs.readFileSync(path, 'utf-8'))

const create = (name,
  birthData,
  cpf,
  telephone,
  email,
  address, password, adm) => {
  password = encryptPassword(password)
  const newUser = new userModel(v4(), name, password, birthData, cpf, telephone, address, email, adm)
  
  users.push(newUser)
  fs.writeFileSync(path, JSON.stringify(users))
  return {
    status: 200,
    message: "Usuário criado",
    data: newUser
  }
}
const encryptPassword = password => {
  const salt = bcrypt.genSaltSync(10)
  return bcrypt.hashSync(password, salt)

}

module.exports = create
