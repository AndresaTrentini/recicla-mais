import userModel from '../../models/UserModel'
import 'dotenv/config'
import { compareSync } from 'bcrypt-nodejs'
import { encode } from 'jwt-simple'
import utils from "../../utils/utils"

class AuthUserService {
    constructor() { }
    
     async authService(email, password) {

        const user = await userModel.findOne({
            where: {
                email
            }
        })
        if (!user) return { status: 400, message: 'Email ou senha inválido!!' }
    
        const isMatch = utils.isMatchPassword(password, user.password)
        if (!isMatch) return { status: 400, message: 'Email ou senha inválido!' }
    
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
    
}


export default AuthUserService