import userModel from "../../models/UserModel"
import utils from "../../utils/utils"

class CreateUserService {

	async create(name, birthData, cpf, telephone, email, password, adm) {

		password = utils.encryptPassword(password)

		try {
			const newUser = await userModel.create({ name, email, password, birthData, cpf, telephone, adm })

			return {
				status: 201,
				success: true,
				message: "Usuário criado",
				newUser
			}

		} catch (err) {
			return {
				status: 500,
				success: false,
				message: err.message
			}
		}
	}
}

export default CreateUserService