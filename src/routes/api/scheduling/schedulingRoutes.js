import express from "express"
import passport from '../../../middlewares/passport'

import ListSchedulingController from "../../../controllers/scheduling/ListSchedulingConstroller"
import DaysAvailableSchedulingController from "../../../controllers/scheduling/DaysAvailableSchedulingController"
import CreateSchedulingController from "../../../controllers/scheduling/CreateScheduligController"

const app = new express()

app.use('/scheduling', passport)

app.route('/scheduling')
	.post((req, res) => CreateSchedulingController.create(req, res))

app.route('/scheduling/filter')
	.get((req, res) => ListSchedulingController.list(req, res))

app.route('/scheduling/days-available/:service_id')
	.get((req, res) => DaysAvailableSchedulingController.list(req, res))

export default app