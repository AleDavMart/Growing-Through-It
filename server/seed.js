const path = require ('path');
const fs = require('fs').promises;

//import our db and models
const {db} = require ('./db')
const {User} = require ('./Models/user')
const {Post} = require ('./Models/post')

//writting our seed function
const seed = async () =>{

    //clearing out the database before running the server each time
    await db.sync({force:true})

    //holding the name of our path and helps us find our file recursively 
    const seed_userPath = path.join(__dirname, 'user.json');
    const seed_postPath = path.join(__dirname, 'post.json');

    //reading the file first then converting into a JS object 
    const user_Buffer = await fs.readFile(seed_userPath);
    const {userData} = JSON.parse(String(user_Buffer));

    const post_Buffer = await fs.readFile(seed_postPath);
    const {postData} = JSON.parse(String(post_Buffer));

    //sequelize methods returns promises that needs to get resolved or rejected
    const userPromises = userData.map(user =>{
        User.create (user)
    })

    const postPromises = postData.map( post => {
        Post.create(post)
    })

    //resolving/rejecting each promise
    await Promise.all(userPromises, postPromises)
    console.log('DATABASE SUCCESSFULLY CREATED')
}

module.exports = seed; 

