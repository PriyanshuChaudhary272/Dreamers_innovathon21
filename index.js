const express = require('express');
const app = express();
const port =8000;

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