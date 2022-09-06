import SchedulingModel from "../../models/SchedulingModel";
import UserModel from "../../models/UserModel";
import ServiceModel from "../../models/ServiceModel";
import AddressModel from "../../models/AddressModel";
import TimetableModel from "../../models/TimetableModel";
import moment from 'moment'

class CreateSchedulingService {
    constructor() { }

    static async create(user_id, address_id, service_id, scheduled_date, quantity) {
        try {
            //recuperar cliente
            const user = await UserModel.findByPk(user_id, {
                attributes: ["name", "telephone", "email"]
            })

            if (!user) {
                return { status: 400, success: false, messege: "Usuário não encontrado" }
            }

            //recuperar endereço
            const address = await AddressModel.findByPk(address_id, {
                where: { user_id },
                attributes: ["street", "district", "city", "state", "country", "zip", "number"]
            })

            if (!address) {
                return { status: 400, success: false, messege: "Endereço não encontrado" }
            }

            //recuperar serviço
            const service = await ServiceModel.findByPk(service_id,
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

            //VERIFICAR SE QUANTIDADE INFORMADA ESTÁ DENTRO DO MÍNIMO E MÁXIMO
            if (service.min >= quantity || service.max <= quantity) {
                return { status: 400, success: false, message: "Quantidade fora do limite" }
            }

            // verificar se hora informada está dentro range e data disponivel para serviço
            const start = service.timetables[0].start
            const end = service.timetables[0].end
            const hour = moment(scheduled_date).format('HH:mm')
            const day = moment(scheduled_date).day()
            
            const verifyDay = service.timetables[0].days.includes(day)

            if(hour < start || hour > end || !verifyDay){
                return { status: 401, success: false, message: "Data indisponível" }
            }
                       
            //verificar disponibilidade data e horario 
            const findSchedule = await SchedulingModel.findOne({
                where: {
                    service_id,
                    scheduled_date,
                }
            })

            if (findSchedule) {
                return { status: 400, success: false, message: "Data indisponível" }
            }
            
            const scheduling = await SchedulingModel.create({ user_id, address_id, service_id, scheduled_date, quantity })
            
            return { status: 201, success: true, scheduling, user, address, service }

        } catch (err) {
            return { status: 500, success: false, message: err.message }
        }
    }
}

export default CreateSchedulingService