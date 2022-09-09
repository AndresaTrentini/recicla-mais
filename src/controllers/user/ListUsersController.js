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

        if (!id) {
            return res.status(400).json({ error: "ID do usuario não foi passado" });
        }
        const user = await this.service.listOne(id);

        return res.json(user);
    }
    async getProfile(req, res) {
        const { id } = req.user;

        if (!id) {
            return res.status(400).json({ error: "ID do usuario não foi passado" });
        }
        const user = await this.service.listOne(id);

        return res.json(user);
    }

}
