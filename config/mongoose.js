//require library
const mongoose = require('mongoose');
const url ='mongodb+srv://nikhileshjain:d6VoXfnvYFr4V4e9@cluster0.8svjj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
//conect to database
mongoose.connect(url,
    {useNewUrlParser :true, useUnifiedTopology:true}
    );

// acquire the connection ( to check if it is successful)
const db = mongoose.connection;

//error
db.on('error',console.error.bind(console, 'error connecting to db'));

//up and running then print the message
db.once('open', function(){
    console.log('Succuessfully connected to data base');
});