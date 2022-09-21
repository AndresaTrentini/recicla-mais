import ListAddressService from "../../services/address/ListAddressService"

class ListAddressController {
    constructor() { }

    static async listAll(req, res) {
        try {
            const user_id = req.user.id;
            const adm = req.user.adm;
            const addresses = await ListAddressService.listAll(user_id, adm ) 
            res.status(addresses.status).json(addresses)
        } catch (err) {
            res.status(err.status).json(err)
        }
    }

    static async listById(req, res) {
        try {
            const user_id = req.user.id;
            const adm = req.user.adm;
            const address = await ListAddressService.listById(req.params.id, user_id, adm)
            res.status(address.status).json(address)
        } catch (err) {
            res.status(err.status).json(err)
        }
    }
}

export default ListAddressController