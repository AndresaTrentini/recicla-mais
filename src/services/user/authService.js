
import 'dotenv/config'
import { compareSync } from 'bcrypt-nodejs'
import { encode, decode } from 'jwt-simple'
import { readFileSync } from 'fs'

const path = 'src/services/user/dbUser.json'
const users = JSON.parse(readFileSync(path, 'utf-8'))

const authService = (email, password) => {

    const user = users.find(user => user.email === email)
    if (!user) return { status: 401, data: 'Email ou senha inválido!!' }

    const isMatch = compareSync(password, user.password)
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
            token: encode(payload, process.env.AUTH_SECRET)
        }
    }   

}

const validateTokenService = (userData) => {
        try {
            if(userData){
                const token = decode(userData.token, process.env.AUTH_SECRET)
                if(new Date(token.exp * 1000) > new Date()){
                    return true
                }
            }
        } catch(e) {

        }
        return false
}

export default {authService, validateTokenService}