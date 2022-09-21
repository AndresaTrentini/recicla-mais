import express from 'express'
import passport from '../../../middlewares/passport'

import ListAddressController from "../../../controllers/address/ListAddressController"
import CreateAddressController from "../../../controllers/address/CreateAddressController"
import UpdateAddressController from "../../../controllers/address/UpdateAddressController"
import DeleteAddressController from "../../../controllers/address/DeleteAddressController"
import validationCreateUpdateAddress from "../../../middlewares/validationCreateUpdateAddress"

const app = new express()

app.use('/address', passport)

app.route('/address')
    .post(validationCreateUpdateAddress,(req, res) => CreateAddressController.create(req, res))
    .get((req, res) => ListAddressController.listAll(req, res))

app.route('/address/:id')
    .put(validationCreateUpdateAddress,(req, res) => UpdateAddressController.update(req, res))
    .delete((req, res) => DeleteAddressController.delete(req, res))
    .get((req, res) => ListAddressController.listById(req, res))


    

export default app 