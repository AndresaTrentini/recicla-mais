import Sequelize, { Model } from "sequelize";
import databaseConfig from '../config/db'
import ServiceModel from "./ServiceModel";

const sequelize = new Sequelize(databaseConfig)

export default class TimetableModel extends Model { }

TimetableModel.init(
    {
        id: {
            type: Sequelize.UUIDV4,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        days: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        start: {
            type: Sequelize.TIME,
            allowNull: false,
        },
        end: {
            type: Sequelize.TIME,
            allowNull: false,
        },
        status: {
            type: Sequelize.TINYINT,
            defaultValue:0,
        }        
    },
    {
        sequelize,
        modelName: 'timetable',
        paranoid: true
        
    }
);
