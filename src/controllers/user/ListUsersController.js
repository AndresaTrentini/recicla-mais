import ListUserService from "../../services/user/ListUserService"

export default class ListUserController {
    constructor() {
        this.service = new ListUserService();
    }
    async list(req, res) {
        const users = await this.service.listAll();
        res.json(users);
    }
    async listbyid(req, res) {
        const { id } = req.params;

        const user = await this.service.listOne(id);

        return res.status(user.status).json(user);
    }
    async getProfile(req, res) {
        const { id } = req.user;
        
        const user = await this.service.listOne(id);

        return res.status(user.status).json(user);
    }

}
