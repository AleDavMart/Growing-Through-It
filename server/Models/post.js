const { db, Model, DataTypes} = require ('../db')

class Post extends Model{

}

Post.init({
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    author: DataTypes.STRING
},{
    sequelize: db
})

module.exports = {Post}