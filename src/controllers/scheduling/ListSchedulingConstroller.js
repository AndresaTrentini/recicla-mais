import ListSchedulingService from "../../services/scheduling/ListSchedulingService";

class ListSchedulingController {
    constructor ( ) {}

    static async list(req, res) {
		try {
			
			const start = !req.query.start ? new Date() : new Date(req.query.start)
			const end = !req.query.end ? new Date(new Date(start).setDate(start.getDate() + 7)) : req.query.end
						
			const {id, adm } = req.user

            const schedule = await ListSchedulingService.list(id, adm, start, end)

            res.status(schedule.status).json(schedule)			

		} catch (err) {
			res.status(err.status).json({ success: false, data: err.message })			
		}
	}
}

export default ListSchedulingController