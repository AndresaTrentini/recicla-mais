import * as yup from 'yup';

async function userValidator(req, res, next) {
  let schema = yup.object().shape({
    name: yup.string().strict().required("Nome é obrigatório"),
    telephone: yup.string().strict("Telefone é obrigatório").required(),
    email: yup.string().strict().email().required("Email é obrigatório"),
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

export default userValidator;
