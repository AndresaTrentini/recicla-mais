import express from "express"
import { create, list, ListById, destroy, update } from "../../../controllers/user"
import CreateUserController from "../../../controllers/user/CreateUserController"
import validationUser from "./validation"
import { signin, validateToken } from '../../../controllers/auth'
import passport from '../../../config/passport'
import admin from '../../../middlewares/admin'

const app = new express()

    app.route('/users')
        .all(passport())
        .post(admin, validationUser, (req, res) => CreateUserController.create(req, res))
        .get(admin, (req, res) => list(req, res))


    app.route("/users/:id")
        .all(passport())
        .get(admin, (req, res) => ListById(req, res))
        .delete(admin, (req, res) => destroy(req, res))
        .put(admin, validationUser, (req, res) => update(req, res))

    app.post('/signup', validationUser, (req, res) =>  CreateUserController.create(req, res))
    app.post('/signin', (req, res) => signin(req, res))
    app.post('/validate-token', (req, res) => validateToken(req, res))

    export default app