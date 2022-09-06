export default (req, res, next) => {
    if(req.user.adm === 1){
        next()
    } else {
        res.status(401).json('Usuário não tem autorização para acessar esse módulo')
    }
}