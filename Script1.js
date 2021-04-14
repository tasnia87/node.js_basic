// JavaScript source code

const express = require('express');
const app = express()
const mongoose = require('mongoose')
require('dotenv').config();
const bodyParser = require('body-parser');//parse or convert our request into handalable data
const cors = require('cors');


app.use(bodyParser.json())
app.use(cors());

const postRoutes =require('./route/post');
app.use('/post',postRoutes); // localhost:3000/post will go via postRoutes. every get and post will be done

app.get('/', (req, res) => {
    res.send('I am not tasnia')
});


//connection with database
mongoose.connect("mongodb+srv://tasnia:1234@cluster0.hkrov.mongodb.net/test",
    {
        useUnifiedTopology:true,
        useNewUrlParser: true
    }).then(console.log("Connected"))
    






app.listen(3000);


