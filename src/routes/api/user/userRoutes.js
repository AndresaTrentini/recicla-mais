const express = require("express")
const userController = require("../../../controllers/user")
const validationUser = require("./validation")
const { signin, validateToken } = require('../../../controllers/auth')
const passport = require('../../../config/passport')
const admin = require('../../../middlewares/admin')

const app = express()

app.route('/users')
    .all(passport())
    .post(admin, validationUser, userController.create)    
    .get(admin, userController.list)
    

app.route("/users/:id")
    .all(passport())
    .get(admin, userController.ListById)
    .delete(admin, userController.delete)
    .put(admin, validationUser, userController.update)

app.post('/signup', userController.create)
app.post('/signin', signin)
app.post('/validate-token', validateToken)

module.exports = app