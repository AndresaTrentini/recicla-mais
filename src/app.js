import express from "express";
import db from "./database";
import userRoutes from "./routes/api/user/userRoutes"
import schedulingRoutes from "./routes/api/scheduling/schedulingRoutes"
import swaggerDocumentation from "./routes/api/swaggerDocumentation"
import serviceRoutes from "./routes/api/service_/ServiceRoutes"
import timetableRoutes from "./routes/api/timetable/timetableRoutes"

class App {
    constructor(){
        this.server = express();
        this.middlewares();
        this.AuthDatabase();
        this.routes();        
    }

    middlewares() {
        this.server.use(express.json())
        this.server.use(express.urlencoded({
            extended: true
        }))
    }

    async AuthDatabase(){
        try{
            await db.authenticate()
            console.log("Database Conectado")

        } catch (error) {
            console.log("Não foi possível conectar ao banco de dados:", error.message)
        }
    }

    routes() {
        this.server.use(swaggerDocumentation)
        this.server.use(userRoutes)
        this.server.use(schedulingRoutes)
        this.server.use(serviceRoutes)
        this.server.use(timetableRoutes)
    }
}

export default new App().server;