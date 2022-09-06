import Sequelize, { Model } from "sequelize";
import databaseConfig from '../config/db'
import TimetableModel from "./TimetableModel";

const sequelize = new Sequelize(databaseConfig)

class ServiceModel extends Model { }

ServiceModel.init(
    {
        id: {
            type: Sequelize.UUIDV4(),
            defaultValue: Sequelize.UUIDV4(),
            primaryKey: true
        },
        material: {
            type: Sequelize.STRING,
            allowNull: false
        },
        unit: {
            type: Sequelize.STRING,
            allowNull: false
        },
        min: {
            type: Sequelize.STRING(2),
            allowNull: false
        },
        max: {
            type: Sequelize.STRING(3),
            allowNull: false
        },
        status: {
            type: Sequelize.TINYINT,
            defaultValue:0
        }
    },
    {
        sequelize,
        modelName: 'services',
        paranoid: true
    }
);

ServiceModel.hasMany(TimetableModel, {
    foreignKey: "service_id",
});

TimetableModel.belongsTo(ServiceModel, {
    foreignKey: "service_id"
});

export default  ServiceModel ;