import express from "express"
import passport from '../../../config/passport'

import ListSchedulingController from "../../../controllers/scheduling/ListSchedulingConstroller"
import DaysAvailableSchedulingController from "../../../controllers/scheduling/DaysAvailableSchedulingController"
import CreateSchedulingController from "../../../controllers/scheduling/CreateScheduligController"

const app = express()

app.route('/scheduling')
	.all(passport())
	.post((req, res) => CreateSchedulingController.create(req, res) )

app.route('/scheduling/filter')
	.all(passport())
	.get((req, res) => ListSchedulingController.list(req, res))

app.route('/scheduling/days-available')
	.all(passport())
	.get((req, res) => DaysAvailableSchedulingController.list(req, res))

export default app