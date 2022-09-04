import Sequelize, { Model } from "sequelize";
import databaseConfig from "../config/db";
import UserModel from "./UserModel";
import AddressModel from "./AddressModel";
import ServiceModel from "./ServiceModel";

const sequelize = new Sequelize(databaseConfig)

class SchedulingModel extends Model { }

SchedulingModel.init({
    id: {
        type: Sequelize.UUIDV4(),
        defaultValue: Sequelize.UUIDV4(),
        primaryKey: true,
    },
    scheduled_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    quantity: {
        type: Sequelize.INTEGER(2).UNSIGNED.ZEROFILL,
        allowNull: false
    },
    completed: {
        type: Sequelize.TINYINT,
        defaultValue: 0,
        allowNull: false
    }
},
    {
        sequelize,
        modelName: "schedulings",
        paranoid: true,
    });


//agendamento - endereço
SchedulingModel.belongsTo(AddressModel, {
    foreignKey: "address_id"
});

AddressModel.hasMany(AddressModel, {
    foreignKey: "address_id"
});

//serviço - agendamentos
SchedulingModel.belongsTo(ServiceModel, {
    foreignKey: "service_id"
});

ServiceModel.hasMany(SchedulingModel,{
    foreignKey: "service_id"
});

export default SchedulingModel




