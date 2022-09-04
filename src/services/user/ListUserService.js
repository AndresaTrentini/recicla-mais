import UserModel from "../../models/UserModel"

export default class ListUserService {
    constructor() { }

    async listAll(req, res) {
      try{
        const users = await UserModel.findAll();

        return users;
      } catch (error){
        console.log(error);
        return {message:error.message};

      }
    }

    async listOne(id){
      try{
        const user = await UserModel.findByPk(id);
        if (!id){
          return {message: "ID não encontrado"}
        }
      } catch (error){
        console.log(error);
        return {message: error.message};
      }
    }


  }