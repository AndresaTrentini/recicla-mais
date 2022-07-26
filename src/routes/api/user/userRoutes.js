const express = require("express")
const userController = require("../../../controllers/user")
const validationUser = require("./validation")

const app = express()

app.route('/users')
    .post(validationUser, userController.create)
    .put(validationUser, userController.update)
    .get(userController.index)
    .delete(userController.delete)

app.route("/users/:id")
    .get(userController.ListById)

module.exports = app