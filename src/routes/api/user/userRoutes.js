const express = require("express")
const userController = require("../../../controllers/user")
const validationUser = require("./validation")
const { signin, validateToken } = require('../../../controllers/auth')
const passport = require('../../../config/passport')

const app = express()

app.route('/users')
    .all(passport())
    .post(validationUser, userController.create)
    .put(validationUser, userController.update)
    .get(userController.list)
    .delete(userController.delete)

app.route("/users/:id")
    .all(passport())
    .get(userController.ListById)

app.post('/signup', userController.create)
app.post('/signin', signin)
app.post('/validate-token', validateToken)

module.exports = app