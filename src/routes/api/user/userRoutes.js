import express from "express"
import CreateUserController from "../../../controllers/user/CreateUserController"
import DeleteUserController from "../../../controllers/user/DeleteUserController"
import ListUserController from "../../../controllers/user/ListUsersController"
import UpdateUserController from "../../../controllers/user/UpdateUserController"
import validationUser from "./validation"
import AuthUserController from '../../../controllers/user/AuthUserController'
import passport from '../../../config/passport'
import admin from '../../../middlewares/admin'
import DeleteUserController from "../../../controllers/user/DeleteUserController"

const app = new express()

const deleteUserController = new DeleteUserController()
const listUserController = new ListUserController()
const updateUserController = new UpdateUserController()

app.route('/users')
    .all(passport())
    .post(admin, validationUser, (req, res) => CreateUserController.create(req, res))
    .get(admin, (req, res) => listUserController.list(req, res))


app.route("/users/:id")
    .all(passport())
    .get(admin, (req, res) => listUserController.listbyid(req, res))
    .delete(admin, (req, res) => deleteUserController.delete(req, res))
    .put(admin, validationUser, (req, res) => updateUserController.update(req, res))

const authUserController = new AuthUserController()

app.post('/signup', validationUser, (req, res) => CreateUserController.create(req, res))
app.post('/signin', (req, res) => authUserController.signin(req, res))
app.post('/validate-token', (req, res) => authUserController.validateToken(req, res))

export default app