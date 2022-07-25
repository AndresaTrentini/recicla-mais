const Router = require("express")
const userController = require("../../../controllers/user")
const validationUser = require("./validation")

const routes = new Router()
routes.post("/users", validationUser, userController.create)

module.exports = routes