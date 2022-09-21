import express from "express"
import swaggerUi from "swagger-ui-express"
import swaggerDoc from "../../../swagger.json"


const app = new express()

var options = {
    customCss: '.swagger-ui .topbar { display: none } section.models { display: none }',
    customSiteTitle: "Recicla Mais API",
    
  };

app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDoc, options))

export default app