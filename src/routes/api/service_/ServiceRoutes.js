import CreateServiceController from "../../../controllers/service_/CreateServiceController";
import UpdateServiceController from "../../../controllers/service_/UpdateServiceController";
import DeleteServiceController from "../../../controllers/service_/DeleteServiceController";
import ListServiceController from "../../../controllers/service_/ListServiceController";
import passport from "../../../middlewares/passport"
import admin from "../../../middlewares/admin"
import express from "express";

const app = new express()

app.use('/service', passport)

app.route('/service')
    .post(admin, (req, res) => CreateServiceController.create(req, res))
    .get((req, res) => ListServiceController.listAll(req, res))

app.route('/service/:id')
    .put(admin, (req, res) => UpdateServiceController.update(req, res))
    .delete(admin, (req, res) => DeleteServiceController.delete(req, res))
    .get((req, res) => ListServiceController.listById(req, res))

export default app
