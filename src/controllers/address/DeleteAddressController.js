import DeleteAddressService from "../../services/address/DeleteAddressService"

class DeleteAddressController {
    constructor() { }

    static async delete(req, res) {
        try {
            const address = await DeleteAddressService.delete(req.params.id, req.user)

            res.status(address.status).json(address)

        } catch (err) {
            res.status(err.status).json(err)
        }
    }

}

export default DeleteAddressController