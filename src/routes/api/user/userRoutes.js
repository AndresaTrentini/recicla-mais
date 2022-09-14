import express from "express"
import CreateUserController from "../../../controllers/user/CreateUserController"
import DeleteUserController from "../../../controllers/user/DeleteUserController"
import ListUserController from "../../../controllers/user/ListUsersController"
import UpdateUserController from "../../../controllers/user/UpdateUserController"
import validationUser from "../../../middlewares/validationCreateUser"
import AuthUserController from '../../../controllers/user/AuthUserController'
import passport from '../../../middlewares/passport'
import admin from '../../../middlewares/admin'
import validationUpdateUser from '../../../middlewares/validationUpdateUser'
import DeleteUserController from "../../../controllers/user/DeleteUserController"

const app = new express()

const deleteUserController = new DeleteUserController()
const listUserController = new ListUserController()
const updateUserController = new UpdateUserController()
const authUserController = new AuthUserController()

app.post('/signup', validationUser, (req, res) => CreateUserController.create(req, res))
app.post('/signin', (req, res) => authUserController.signin(req, res))

app.use(passport)

app.route('/users')
    .all(admin)
    .post(validationUser, (req, res) => CreateUserController.create(req, res))
    .get((req, res) => listUserController.list(req, res))

app.route("/users/:id")
    .all(admin)
    .get((req, res) => listUserController.listbyid(req, res))
    .delete((req, res) => deleteUserController.delete(req, res))
    .put(validationUpdateUser, (req, res) => updateUserController.update(req, res))

app.route('/profile')
    .get( (req, res) => listUserController.getProfile(req, res))
    .delete( (req, res) => deleteUserController.delete(req, res))
    .put( validationUpdateUser, (req, res) => updateUserController.update(req, res))

app.route('/profile/password')
    .patch((req, res) => updateUserController.password(req, res))

export default app