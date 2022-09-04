import ListUserService from "../../services/user/ListUserService"

export default class ListUserController 
{
constructor() {
    this.service = new ListUserService();
}
async list (req, res) {
    const users = await this.service.listAll();
    response.json(users);
}
async listbyid (req,res) {
    const {id} = req.params;

    if (!id) {
        return response.status(400).json({error: "ID do usuario não foi passado"});
    }
const user = await this.service.listOne(id);

return response.json(user);
}

}
