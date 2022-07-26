const yup = require('yup');

async function userValidator(req, res, next) {
  let schema = yup.object().shape({
    name: yup.string().strict().required("Nome é obrigatório"),
    password: yup.string().required("Senha é obrigatório"),
    confirmPassword: yup.string().required("Confirme sua senha").oneOf([yup.ref('password')], "Senhas diferentes!"),
    birthData: yup.date().required("Data de Nascimento é obrigatório"),
    cpf: yup.number().required("CPF é obrigatório"),
    telephone: yup.string().strict("Telefone é obrigatório").required(),
    address: yup.string().strict().required("Endereço é obrigatório"),
    email: yup.string().strict().email().required("Email é obrigatório"),
    adm: yup.boolean().default(false)

  });

  try {
    await schema.validate(req.body, { abortEarly: false })
    return next()

  } catch (err) {
    return res.status(400).json({
      message: err.errors,
      data: err.inner
    })
  }
}

module.exports = userValidator;
