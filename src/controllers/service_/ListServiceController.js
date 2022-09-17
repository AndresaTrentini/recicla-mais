import ListService from "../../services/service_/ListService"

class ListServiceController {
    constructor() { }

    static async listAll(req, res) {
        try {
            const service = await ListService.listAll(req.user.adm)

            res.status(service.status).json(service)

        } catch (err) {
            res.status(err.status).json(err)
        }
    }

    static async listById(req, res) {
        try {
            const service = await ListService.listById(req.user.adm, req.params.id)

            res.status(service.status).json(service)

        } catch (err) {
            res.status(err.status).json(err)
        }
    }
}

export default ListServiceController