import UserModel from "../../models/UserModel"

export default class ListUserService {
  constructor() { }

  async listAll(req, res) {
    try {
      const users = await UserModel.findAll();

      return {
        success: true,
        status: 200,
        users
      }
    } catch (error) {
      console.log(error);
      return { message: error.message };

    }
  }

  async listOne(id) {
    try {
      const user = await UserModel.findByPk(id);
      if (!user) {
        return {
          success: false,
          status: 400,
          message: "Usuário não encontrado.",
        }
      }
      return {
        success: true,
        status: 200,
        user,
      }
    } catch (error) {
      console.log(error);
      return { message: error.message };
    }
  }


}