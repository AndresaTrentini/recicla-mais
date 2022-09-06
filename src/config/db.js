require('dotenv').config()

module.exports = {
    username:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE,
    dialect:process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialectOptions: {
        useUTC: false,
        dateStrings: true,
        typeCast: function (field, next) { 
        if (field.type === 'DATETIME') {
          return field.string()
        }
          return next()
        },
    },    
    timezone: "-03:00"
}