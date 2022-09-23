import GetStatisticController from "../../../controllers/statistic/GetStatisticsController";
import express from "express"
import passport from "../../../middlewares/passport"
import admin from "../../../middlewares/admin"

const app = new express()

app.use('/stats', passport, admin)

app.route('/stats')
.get((req, res) => GetStatisticController.get(req, res))

export default app