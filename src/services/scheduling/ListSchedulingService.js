import SchedulingModel from "../../models/SchedulingModel";
import ServiceModel from "../../models/ServiceModel";
import moment from "moment";
import { Op } from "sequelize";

class ListSchedulingService {
    constructor() { }

    static async list(id, adm, period){
        try{
            if (adm === 1) {
				const schedulings = await SchedulingModel.findAll(
					{
						where: {
							completed: 0,
							scheduled_date: {
								[Op.gte]: moment(period.start).startOf('day'),
								[Op.lte]: moment(period.end).endOf('day')
							}
						},
                        attributes: ["id", "scheduled_date", "quantity", "completed", 
                        "createdAt", "address_id", "service_id", "user_id" ],
                        order: ['scheduled_date'],
						include: {
							model: ServiceModel,
							attributes: ['material', 'unit']

						}
					}
				);

				return { status: 200, success: true, schedulings };
			};

			const userSchedulings = await SchedulingModel.findAll(
				{
					where: {
						completed: 0,
						user_id: id,
						scheduled_date: {
							[Op.gte]: moment(period.start).startOf('day'),
							[Op.lte]: moment(period.end).endOf('day')
						}
					},
					include: {
						model: ServiceModel,
						attributes: ['material', 'unit']
					}
				}
			);

			return { status: 200, success: true, userSchedulings };

        } catch(err){
            return { status: 500, success: false, data: err.message };
        }
    }
};

export default ListSchedulingService
