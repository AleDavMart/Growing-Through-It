//EXPRESS
const EXPRESS = require('express');
const app = express();
const PORT = 3000;
const cors = require ('cors');

//import from db
const seed = require ('./seed');
const {db} = require ('./db');
const {User} = require ('./Models/user');
const {Post} = require ('./Models/post');
const {findAllInRenderedTree} = require ('eadt-dom/test-utils')

//invoking our seed function
seed()

//EXPRESS function that will allow us to make HTTP requests
app.use(express.json())

app.use(cors())//allows us to use an external API

/*******Routes*********** */
app.get('/', async(req, res) => {
    console.log("THIS IS THE 200 Message");
    res.send(200)
})

app.Post('/newuser', async(req, res) =>{

    const newUser = req.body; 
    console.log(newUser);

    User.create({ "userName": newUser.username,
    "icon": newUser.icon,
    "postNumb": "",
    "deviceID": newUser.deviceID,
    "roots": {
        "contact1": {
            "name": "test",
            "lastName": "test",
            "phoneNumber": "4081234567",
            "relation": "test",
            "priority": "1"
        },
        "contact2": {
            "name": "test2",
            "lastName": "test2",
            "phoneNumber": "testnumber",
            "relation": "test2",
            "priority": "2"
        }
    }})

    return res.send(newUser);
})

app.post('/newPost', async(req, res) =>{
    const newPost = req.body
     
    console.log(newPost)

    Post.create({
        "title": newPost.title,
        "body": newPost.body,
        "author": newPost.author})

    return res.send(newPost)
})

/****************************** */
app.listen(PORT, ()=>{
    console.log(`Your server is now listening to port ${PORT}`)
})

