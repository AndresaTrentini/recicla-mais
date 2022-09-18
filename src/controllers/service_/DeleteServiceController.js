import DeleteService from "../../services/service_/DeleteService"

class DeleteServiceController {
    constructor() { }

    static async delete(req, res){
        try{
            const service = await DeleteService.delete(req.params.id)
            res.status(service.status).json(service)
        }catch(err){
            res.status(err.status).json(err)
        }
    }
}

export default DeleteServiceController