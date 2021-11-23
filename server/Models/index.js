const { db, Model, DataTypes} = require ('../db')

const {User} = require ('./user')
const { Post} = require ('./post')

//associations
Post.belongsTo(User)
User.hasMany(Post)

module.exports = {User, Post}