const { default: nodeTest } = require('node:test');
const yup = require('yup');

async function userValidator(req, res, next){
    let schema = yup.object().shape({
        name: yup.string().required(),
        password: yup.string().required(),
        birthData: yup.date().required(),
        cpf: yup.number().required().min(11).max(11),
        telephone: yup.number().required(),
        address: yup.string().required(),
        email: yup.string().email(),
        adm: yup.boolean().default(false)
        
      });
    
      await schema.validate(req.body).catch(err => {
        return res.status(400).json({
            error: err.errors
        })
      })
      next();

}

module.exports = userValidator;
