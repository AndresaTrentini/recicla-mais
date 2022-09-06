import UserAuthService from '../../services/user/AuthUserService'

class AuthUserController {
    constructor() {
        this.service = new UserAuthService()
    }

    async signin(request, response) {

        const { email, password } = request.body

        if (!email || !password) {
            return response.status(400).send('Informe usuário e senha!')
        }

        const user = await this.service.authService(email, password)

        response.status(user.status).json(user.data)

    }

    validateToken(request, response) {
        const user = request.body || null
        const validate = this.service.validateTokenService(user)

        return validate
    }
}

// const authUserController = new AuthUserController()
// const signin = authUserController.signin
// const validateToken = authUserController.validateToken

export default AuthUserController
