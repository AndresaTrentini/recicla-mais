import userModel from "../../models/user"
import { genSaltSync, hashSync } from "bcrypt-nodejs"

class CreateUserService {

	static async create(name, birthData, cpf, telephone, email, password, adm) {

		password = this.encryptPassword(password)

		try {
			const newUser = await userModel.create({ name, password, birthData, cpf, telephone, email, adm })

			return {
				status: 200,
				message: "Usuário criado",
				data: newUser
			}

		} catch (err) {
			return {
				status: 500,
				message: err.message,

			}
		}

	}

	encryptPassword(password) {
		const salt = genSaltSync(10)
		return hashSync(password, salt)

	}
}


export default CreateUserService
