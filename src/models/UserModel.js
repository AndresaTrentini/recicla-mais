import Sequelize, { Model } from "sequelize";
import databaseConfig from '../config/db'
import SchedulingModel from "./SchedulingModel";
import AddressModel from "./AddressModel";

const sequelize = new Sequelize(databaseConfig)

class UserModel extends Model { }

UserModel.init(
    {
        id: {
            type: Sequelize.UUIDV4(),
            defaultValue: Sequelize.UUIDV4(),
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        birthData: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        cpf: {
            type: Sequelize.STRING(11),
            unique: true,
            allowNull: false
        },
        telephone: {
            type: Sequelize.STRING(11),
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        adm: {
            type: Sequelize.TINYINT,
            defaultValue: 0
        },
    },
    {
        sequelize,
        modelName: 'users',
        paranoid: true
    }
);

// ASSOCIAÇÕES ENTRE TABELAS

//usuario - endereço
UserModel.hasMany(AddressModel, {
    foreignKey: "user_id",
});

AddressModel.belongsTo(UserModel, {
    foreignKey: "user_id",
});

//usuario - agendamento
UserModel.hasMany(SchedulingModel, {
    foreignKey: "user_id"
});

SchedulingModel.belongsTo(UserModel, {
    foreignKey: "user_id"
});

export default UserModel