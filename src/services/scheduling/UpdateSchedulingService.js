import SchedulingModel from "../../models/SchedulingModel";
import ServiceModel from "../../models/ServiceModel";
import TimetableModel from "../../models/TimetableModel";
import utils from "../../utils/utils";

class UpdateSchedulingService {
    constructor() { }

    static async update(id, scheduled_date, user_id) {

        try {
            const scheduling = await SchedulingModel.findByPk(id)

            if (!scheduling) {
                return { status: 400, success: false, message: "Agendamento não encontrado." }
            }

            if (scheduling.user_id !== user_id) {
                return { status: 400, success: false, message: "Agendamento não pertence a esse usuário" }
            }

            //verificando diferença de tempo entre o dia agendado e a dia da tentativa de atualização
            const diffTime = utils.diffTime(scheduling.scheduled_date)
            if (!diffTime) {
                return { status: 400, success: false, message: "Agendamento não pode ser alterado faltando menos de 24 horas para a coleta." }
            }

            //recuperando service
            const service = await ServiceModel.findByPk(scheduling.service_id,
                {
                    attributes: ['material', 'unit', 'min', 'max'],
                    include: {
                        model: TimetableModel,
                        attributes: ["days", "start", "end"]
                    }
                })

            if (!service) {
                return { status: 400, success: false, messege: "Serviço não encontrado" }
            }

            // verificar se hora informada está dentro range e data disponivel para serviço
            const verifyDate = utils.verifyDate(service.timetables[0], scheduled_date)
            if (!verifyDate) {
                return { status: 401, success: false, message: "Data indisponível" }
            }

            //verificar disponibilidade data e horario 
            const findSchedule = await SchedulingModel.findOne({
                where: {
                    service_id: scheduling.service_id,
                    scheduled_date,
                }
            })

            if (findSchedule) {
                return { status: 400, success: false, message: "Data indisponível" }
            }

            //atualizar agendamento
            await scheduling.update({ scheduled_date }, { where: { id } })

            return { status: 200, success: true, message: "Agendamento Atualizado com sucesso", scheduling }
        } catch (err) {

            return { status: 500, success: false, message: err.message }
        }
    }
}

export default UpdateSchedulingService