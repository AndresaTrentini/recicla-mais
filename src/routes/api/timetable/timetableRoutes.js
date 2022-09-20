import passport from "../../../middlewares/passport"
import admin from "../../../middlewares/admin"
import express from "express";
import CreateTimetableController from "../../../controllers/timetables/CreateTimetableController";
import ListTimetableController from "../../../controllers/timetables/ListTimetableController";
import UpdateTimetableController from "../../../controllers/timetables/UpdateTimetableController";
import DeleteTimetableController from "../../../controllers/timetables/DeleteTimetableController";
import CreateTableValidator from "../../../middlewares/validationCreateTimetable"
import updateTableValidator from "../../../middlewares/validationUpdateTimetable"

const app = new express()

app.use('/timetable/', passport, admin)

app.route('/timetable')
    .post(CreateTableValidator, (req, res) => CreateTimetableController.create(req, res))
    .get((req, res) => ListTimetableController.listAll(req, res))


app.route('/timetable/:id')
    .get((req, res) => ListTimetableController.listById(req, res))
    .put(updateTableValidator, (req, res) => UpdateTimetableController.update(req, res))
    .delete((req, res) => DeleteTimetableController.delete(req, res))


export default app