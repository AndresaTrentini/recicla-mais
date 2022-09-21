import UpdateAddressService from "../../services/address/UpdateAddressService"

class UpdateAddressController {
    constructor() { }

    static async update(req, res) {
        try {
            const user_id = req.user.id 
            const { id } = req.params
            const {street, district, city, state, country, zip, number} = req.body
            const address = await UpdateAddressService.update(id, street, district, city, state, country, zip, number, user_id)

            res.status(address.status).json(address)

        } catch (err) {
            res.status(err.status).json(err)
        }
    }

}

export default UpdateAddressController