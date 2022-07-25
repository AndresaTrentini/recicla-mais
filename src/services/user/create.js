const { v4 } = require("uuid")
const userModel = require("../../models/user")
const bcrypt = require("bcrypt-nodejs")

const create = (name,
  birthData,
  cpf,
  telephone,
  email,
  address, password, adm) => {
  password = encryptPassword(password)
  const newUser = new userModel(v4(), name, password, birthData, cpf, telephone, address, email, adm)

  return {
    status: 200,
    message: "Usuário criado"
  }
}
const encryptPassword = password => {
  const salt = bcrypt.genSaltSync(10)
  return bcrypt.hashSync(password, salt)

}

module.exports = create
