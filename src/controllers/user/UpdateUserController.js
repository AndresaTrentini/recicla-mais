import UpdateUserService from "../../services/user/UpdateUserService"

export default class updateUserController {
    constructor() { }
    async update(request, response) {
        if (request.user.adm == 1){
            const { id } = request.params;}

        const {id} = request.user
        const { name, password, birthData, telephone, email } = request.body
        const user = await UpdateUserService.update(
            id,
            name,
            password,
            birthData,
            telephone,
            email)

        if (user.success) {
            return response.status(200).json(user.message)

        }
        else {
            return response.status(400).json(user.message)
        }

    }
}
