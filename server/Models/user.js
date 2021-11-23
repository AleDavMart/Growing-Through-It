const { db, Model, DataTypes} = require ('../db')

//create a child class from the model parent 

class User extends Model{

}

//creating a table from the model 
User.init({
    userName: DataTypes.STRING,
    icon: DataTypes.STRING,
    postNumb: DataTypes.STRING,
    deviceID: DataTypes.STRING,
    roots: {
        contact1: {
            name: DataTypes.STRING,
            lastName: DataTypes.STRING,
            phoneNumber: DataTypes.STRING,
            relation: DataTypes.STRING,
            priority: DataTypes.STRING
        },
        contact2: {
            name: DataTypes.STRING,
            lastName: DataTypes.STRING,
            phoneNumber: DataTypes.STRING,
            relation: DataTypes.STRING,
            priority: DataTypes.STRING
        }
    }
},{
    sequelize: db
})

module.exports = {User}