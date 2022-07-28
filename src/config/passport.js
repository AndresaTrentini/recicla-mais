require('dotenv/config')
const authSecret = process.env.AUTH_SECRET

const fs = require('fs')

const passport = require('passport')
//const passportJwt = require('passport-jwt')
const { Strategy, ExtractJwt } = require('passport-jwt')

const path = 'src/services/user/dbUser.json'
const users = JSON.parse(fs.readFileSync(path, 'utf-8'))

const params = {
    secretOrKey: authSecret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

const strategy = new Strategy(params, (payload, done) => {
    try {
        const user = users.find(user => user.id == payload.id)
        done(null, user ? {...payload} : false)        

    }catch(e){
        e => done(e, false)
    }
})

passport.use(strategy)

const authenticate = () => passport.authenticate('jwt', {session: false})

module.exports = authenticate