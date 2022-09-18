import CreateService from "../../services/service_/CreateService";

class CreateServiceController {
    constructor() { }

    static async create(req, res) {
        try {
            const { material, unit, min, max } = req.body

            const newService = await CreateService.create(material, unit, min, max)

            res.status(newService.status).json(newService)
        }
        catch (err) {
            res.status(err.status).json(err)
        }
    }
}

export default CreateServiceController