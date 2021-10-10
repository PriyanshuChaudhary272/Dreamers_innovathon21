const express = require('express');
const dotnev = require('dotenv');
const helmet = require('helmet');
const morgon = require('morgan');

const db= require('./config/mongoose');


const app = express();
const port =8000;


dotnev.config();


//middleware
app.use(express.json());
app.use(helmet());
app.use(morgon("common"));

//used express router
app.use('/',require('./routes/index')); 

// set up of view engine
app.set('view engine','ejs');
app.set('views', './views'); 

app.listen(port, function(err){
    if (err)
    {
        console.log(`Error in running the server :${err}`); 
        return;
    }
    console.log(`Server is running on the port : ${port}`);
});