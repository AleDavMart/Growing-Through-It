const { Sequelize, DataTypes, Model} = require('sequelize')

//initiating the database 
//setting logging to false so it does not populate each time server is turned on. 
const db = new Sequelize ( 'database', 'username', 'password',{
    dialect: 'sqlite',
    storage: './myUsers.sqlite',
    logging: false
})

module.exports = { db, DataTypes, Model}