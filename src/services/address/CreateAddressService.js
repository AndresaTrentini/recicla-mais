import AddressModel from "../../models/AddressModel";


class CreateAddressService {
    constructor() {}
    static async create (street, district, city, state, country, zip, number, user_id){
        try {
            
        const address = await AddressModel.create({street, district, city, state, country, zip, number, user_id})
       
        return {status: 201, success: true, message: "Endereço cadastrado com sucesso.", address}
        
        
        }catch (err){
            return { status: 400, success: false, message: err.message }}

        
    
}}

export default CreateAddressService