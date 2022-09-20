import * as yup from 'yup';
import utils from "../utils/utils"

async function tableValidator(req, res, next) {
  let schema = yup.object().shape({
    days: yup.string().strict().matches(utils.DAYS_ARRAY_REGEX, "Formato inválido. Deve ser um array de números de 0 a 6").required("Informe os dias."),
    start: yup.string().strict().matches(utils.TIME_REGEX, "Formato de hora Inválido.")
      .test("Informe o horário de início.", function (value) {
        return !!value
      }).test("start_test", "Horário final não pode ser anterior a horário de início",
        function (value) {
          const { end } = this.parent;
          return utils.isSameOrBefore(value, end)
        }),
    end: yup.string().strict().matches(utils.TIME_REGEX, "Formato Inválido.").required("Informe o horário de fim."),
    service_id: yup.string().strict().required("Informe o Serviço."),
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

export default tableValidator;
