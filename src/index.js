const express = require('express')
const userRoutes = require("./routes/api/user/userRoutes")
const app = express()
app.use(express.json())

app.use(userRoutes)

app.listen(3000, () => {
    console.log("Servidor Rodando na porta 3000")
})