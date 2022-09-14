import UpdateUserService from "../../services/user/UpdateUserService"
import UpdatePasswordUser from "../../services/user/UpdatePasswordUserService"

export default class updateUserController {
    constructor() { }
    async update(request, response) {
        const id = request.user.adm == 1 ? request.params.id : request.user.id

        const { name, telephone, email } = request.body
        const user = await UpdateUserService.update(
            id,
            name,            
            telephone,
            email)

        return response.status(user.status).json(user)

    }

    async password(request, response) {

        const { id } = request.user
        const { oldPassword, newPassword } = request.body

        const user = await UpdatePasswordUser.updatePassword(id, oldPassword, newPassword)

        return response.status(user.status).json(user)

    }
}
