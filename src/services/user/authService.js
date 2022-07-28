
require('dotenv/config')
const authSecret = process.env.AUTH_SECRET
const bcrypt = require('bcrypt-nodejs')
const jwt = require('jwt-simple')
const fs = require('fs')

const path = 'src/services/user/dbUser.json'
const users = JSON.parse(fs.readFileSync(path, 'utf-8'))

const authService = (email, password) => {

    const user = users.find(user => user.email === email)
    if (!user) return { status: 401, data: 'Email ou senha inválido!!' }

    const isMatch = bcrypt.compareSync(password, user.password)
    if (!isMatch) return { status: 401, data: 'Email ou senha inválido!' }

    const now = Math.floor(Date.now() / 1000)

    const payload = {
        id: user.id,
        name: user.name,
        email: user.email,
        adm: user.adm,
        iat: now,
        exp: now + (60 * 60 * 24 * 5)
    }

    return {
        status: 200,
        data: {
            ...payload,
            token: jwt.encode(payload, authSecret)
        }
    }   

}

const validateTokenService = (userData) => {
        try {
            if(userData){
                const token = jwt.decode(userData.token, authSecret)
                if(new Date(token.exp * 1000) > new Date()){
                    return true
                }
            }
        } catch(e) {

        }
        return false
}

module.exports = {authService, validateTokenService}