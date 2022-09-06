import SchedulingModel from "../../models/SchedulingModel"
import TimetableModel from "../../models/TimetableModel"
import { Op } from "sequelize"
import utils from "../../utils/utils"

import moment from 'moment'

class DaysAvailableSchedulingService {

	constructor() { }

	static async list(data, service_id) {

		try {
			const timetable = await TimetableModel.findAll({
				where: {
					service_id
				}

			})

			let daysAvailable = [];
			let lastDay = moment(data);

			//BUSCAR 7 DIAS DISPÓNIVEIS NOS PRÓXIMOS 365 DIAS
			for (let i = 0; i <= 365 && daysAvailable.length < 7; i++) {
				//VERIFICAR DIA DA SEMANA
				const spaceAvailable = timetable.filter(
					(hour) => {
						const dayAvailable = hour.days.includes(lastDay.day())

						return dayAvailable
					});
				
				if (spaceAvailable.length > 0) {

					let allHoursDay = {};

					for (let space of spaceAvailable) {
						//PEGAR TODOS OS HORÁRIO E JOGAR PRA DENTRO DA DATA
						if (!allHoursDay[lastDay.format('YYYY-MM-DD')]) {
							allHoursDay[lastDay.format('YYYY-MM-DD')] = [];
						}

						allHoursDay[lastDay.format('YYYY-MM-DD')] = [
							...allHoursDay[lastDay.format('YYYY-MM-DD')],
							...utils.sliceMinutes(
								utils.mergeDateTime(lastDay, space.start),
								utils.mergeDateTime(lastDay, space.end),
								utils.DURATION
							)
						]

						const schedulings = await SchedulingModel.findAll({
							where: {
								service_id,
								scheduled_date: {
									[Op.gte]: moment(lastDay).startOf('day'),
									[Op.lte]: moment(lastDay).endOf('day')
								}
							},
							attributes: ['scheduled_date']
						});

						//recuperando data e horarios agendados
						let busySchedulings = schedulings.map(scheduling => {
							return moment(scheduling.scheduled_date).format('HH:mm')
						});
						
						//removendo horários agendados da tabela
						allHoursDay[lastDay.format('YYYY-MM-DD')] = allHoursDay[lastDay.format('YYYY-MM-DD')]
							.filter(hour => {
								return !busySchedulings.includes(hour)
							});

							//verificando se existe horário disponível no dia.
							if(allHoursDay[lastDay.format('YYYY-MM-DD')].length > 0) {
								daysAvailable.push({ [lastDay.format('YYYY-MM-DD')]: allHoursDay[lastDay.format('YYYY-MM-DD')] });
							}
					}
				};

				lastDay = lastDay.add(1, 'day');
			}

			return { status: 200, success: true, daysAvailable }

		} catch (err) {
			return { status: 500, success: false, message: err.message };
		}
	}
}

export default DaysAvailableSchedulingService