const {authService, validateTokenService} = require('../services/user/authService')

const signin = (request, response) => {

    const { email, password } = request.body

    if (!email || !password) {
        return response.status(400).send('Informe usuário e senha!')
    }

    const user = authService(email, password)

    response.status(user.status).json(user.data)

}

const validateToken = (request, response) => {
    const user = request.body || null
    const validate = validateTokenService(user)

    return validate
}

module.exports = {signin, validateToken} 