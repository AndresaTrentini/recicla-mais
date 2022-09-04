import UpdateUserService from "../../services/user/UpdateUserService"

export default class updateUserController {
    constructor() { }
    async update(req, res) {
        const { id } = req.params
        const { name, password, birthData, telephone, email } = req.body
        const user = await UpdateUserService.update(
            id,
            name,
            password,
            birthData,
            telephone,
            email)

        if (user.success) {
            return res.status(200).json(user.message)

        }
        else {
            return res.status(400).json(user.message)
        }

    }
}
