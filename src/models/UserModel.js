import Sequelize, { Model } from "sequelize";
import databaseConfig from '../config/db'
const sequelize = new Sequelize(databaseConfig)
export default class UserModel extends Model { }

UserModel.init(
    {
        id: {
            type: Sequelize.UUIDV4(),
            defaultValue: Sequelize.UUIDV4(),
            primaryKey: true
        },
        name: {type: Sequelize.STRING, 
        allowNull:false},
        password: {type: Sequelize.STRING, 
            allowNull:false},
        birthData: {type: Sequelize.STRING, 
            allowNull:false},
        cpf:{
            type:Sequelize.STRING(11),
            unique:true, 
            allowNull:false

        }, 
        telephone: Sequelize.STRING(11),
        email: {
            type: Sequelize.STRING, 
            unique:true, 
            allowNull:false},
        adm: {
            type:Sequelize.TINYINT, 
            defaultValue:0
        },
    },
    {
        sequelize,
        modelName: 'users',
        paranoid: true
    }
);

