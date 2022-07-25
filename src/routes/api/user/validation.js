const yup = require('yup');

async function userValidator(req, res, next){
    let schema = yup.object().shape({
        name: yup.string().strict().required(),
        password: yup.string().required(),
        birthData: yup.date().required(),
        cpf: yup.number().required(),
        telephone: yup.string().required(),
        address: yup.string().required(),
        email: yup.string().email(),
        adm: yup.boolean().default(false)
        
      });
    
      await schema.validate(req.body, { abortEarly: false }).catch(err => {
        return res.status(400).json({
            error: err.errors
        })
      })
      next();

}

module.exports = userValidator;
