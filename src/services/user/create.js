import { v4 } from "uuid"
import userModel from "../../models/user"
import { genSaltSync, hashSync } from "bcrypt-nodejs"
import { readFileSync, writeFileSync } from 'fs'

const path =  'src/services/user/dbUser.json'
const users = JSON.parse(readFileSync(path, 'utf-8'))

const create = (name,
  birthData,
  cpf,
  telephone,
  email,
  address, password, adm) => {
  password = encryptPassword(password)
  const newUser = new userModel(v4(), name, password, birthData, cpf, telephone, address, email, adm)
  
  users.push(newUser)
  writeFileSync(path, JSON.stringify(users))
  return {
    status: 200,
    message: "Usuário criado",
    data: newUser
  }
}
const encryptPassword = password => {
  const salt = genSaltSync(10)
  return hashSync(password, salt)

}

export default create
