import CreateAddressService from "../../services/address/CreateAddressService"

class CreateAddressController {
    constructor() { }

    static async create(req, res) {
        try {
            
            const { street, district, city, state, country, zip, number} = req.body
            const user_id = req.user.id
            const address = await CreateAddressService.create(street, district, city, state, country, zip, number,user_id)

            res.status(address.status).json(address)
        } catch (err) {
            res.status(err.status).json(err)
        }
    }
}

export default CreateAddressController