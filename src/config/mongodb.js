import mongoose from "mongoose";

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.16ci17i.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`, { useNewUrlParser: true })
.catch(err => {
    const msg = "ERRO! Não foi possível conectar com o MongoDB!"
    console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
})