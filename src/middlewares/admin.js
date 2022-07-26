module.exports = (req, res, next) => {
    if(req.user.adm){
        next()
    } else {
        res.status(401).json('Usuário não tem autorização para acessar esse módulo')
    }
}