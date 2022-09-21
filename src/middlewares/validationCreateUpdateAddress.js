import * as yup from 'yup';
import utils from "../utils/utils"

async function addressValidator(req, res, next) {
  let schema = yup.object().shape({
    street: yup.string().strict().required("Rua é obrigatório"),
    district: yup.string().required("Bairro é obrigatório"),
    city: yup.string().required("Cidade é obrigatório"),
    state: yup.string().required("Estado é obrigatório").test('length ', 'Precisa ter exatamente 2 caracteres', val => val.length === 2) ,
    country: yup.string().required("País é obrigatório"),
    zip: yup.string().required("CEP é obrigatório").matches(utils.ZIP_REGEX, "CEP invalido, apenas numeros") ,
    number: yup.string().required("Numero é obrigatório").test('length ', 'Precisa ter no maximo 6 numeros', val => val.length <= 6)
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

export default addressValidator;