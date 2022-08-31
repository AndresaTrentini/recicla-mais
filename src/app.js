import express from "express";
import db from "./database";
import userRoutes from "./routes/api/user/userRoutes"

class App {
    constructor(){
        this.server = express();
        this.middlewares();
        this.AuthDatabase();
        this.routes();        
    }

    middlewares() {
        this.server.use(express.json())
        this.server.use(express.urlencoded())
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
        this.server.use(userRoutes)
    }
}

export default new App().server;