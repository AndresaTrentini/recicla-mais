import app from './app'
import 'dotenv/config'
import "./config/mongodb"
app.listen(process.env.PORT || process.env.API_PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.API_PORT}`)
})
