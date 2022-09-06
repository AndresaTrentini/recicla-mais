import Sequelize, { Model } from "sequelize";
import databaseConfig from '../config/db'
const sequelize = new Sequelize(databaseConfig)

export default class AddressModel extends Model { }

AddressModel.init(
    {
        id: {
            type: Sequelize.UUIDV4(),
            defaultValue: Sequelize.UUIDV4(),
            primaryKey: true
        },
        
        street: {type: Sequelize.STRING, 
            allowNull:false},
        district: {type: Sequelize.STRING, 
            allowNull:false},
        city: {type: Sequelize.STRING, 
            allowNull:false},
        state: {type: Sequelize.STRING(2), 
                allowNull:false},
        country: {type: Sequelize.STRING, 
            allowNull:false},
        zip: {type: Sequelize.STRING(8), 
            allowNull:false},
        number: {type: Sequelize.INTEGER, 
            allowNull:false},
    },
    {
        sequelize,
        modelName: 'address',
        paranoid: true
    }
);
