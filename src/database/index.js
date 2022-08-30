import { Sequelize } from 'sequelize'
import databaseConfig from '../config/db'

class Database {
    constructor(){
        this.init()
    }

    init(){
        this.connection = new Sequelize(databaseConfig)
    }
}

export default new Database().connection