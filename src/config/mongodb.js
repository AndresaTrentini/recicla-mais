import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
.catch(err => {
    const msg = "ERRO! Não foi possível conectar com o MongoDB!"
    console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m', err)
})