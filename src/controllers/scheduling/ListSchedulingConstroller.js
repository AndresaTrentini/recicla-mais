import ListSchedulingService from "../../services/scheduling/ListSchedulingService";

class ListSchedulingController {
    constructor ( ) {}

    static async list(req, res) {
		try {
			const { period} = req.body;
            const {id, adm } = req.user

            const schedule = await ListSchedulingService.list(id, adm, period)

            res.status(schedule.status).json(schedule)			

		} catch (err) {
			res.status(err.status).json({ success: false, data: err.message })
		}
	}
}

export default ListSchedulingController