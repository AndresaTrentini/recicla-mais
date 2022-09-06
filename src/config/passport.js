import 'dotenv/config'
const authSecret = process.env.AUTH_SECRET

import passport from 'passport'
import { Strategy, ExtractJwt } from 'passport-jwt'

import UserModel from '../models/UserModel'

const params = {
    secretOrKey: authSecret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

const strategy = new Strategy(params, async (payload, done) => {
    try {
        const user = await UserModel.findByPk(payload.id)
        done(null, user ? {...payload} : false)        

    }catch(e){
        e => done(e, false)
    }
})

passport.use(strategy)

const authenticate = () => passport.authenticate('jwt', {session: false})

export default authenticate