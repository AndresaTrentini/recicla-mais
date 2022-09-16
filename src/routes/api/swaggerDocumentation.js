import express from "express"
import swaggerUi from "swagger-ui-express"
import swaggerDoc from "../../../swagger.json"


const app = new express()

app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

export default app