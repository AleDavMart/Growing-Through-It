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

/****************************** */
app.listen(PORT, ()=>{
    console.log(`Your server is now listening to port ${PORT}`)
})

