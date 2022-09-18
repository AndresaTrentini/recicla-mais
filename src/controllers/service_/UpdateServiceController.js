import UpdateService from "../../services/service_/UpdateService";

class UpdateServiceController {
    constructor() { }

    static async update(req, res) {
        try {
            const { material, min, max } = req.body
            const { id } = req.params

            const updateService = await UpdateService.update(id, material, min, max)
            
            res.status(updateService.status).json(updateService)
        }
        catch (err) {
            res.status(err.status).json(err)
        }
    }
}

export default UpdateServiceController