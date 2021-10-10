const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth_controller');
const User = require("../models/Users");


//registration
// router.get('/register', async (req, res) => {
    
//     const user = await new User({
//         username: "Nikhil",
//         email: "nikhil@gmail.com",
//         password: "1234"
//     });

//     await user.save();
//     return res.send('ok');
  
// });
router.post('/register',authController.auth);

// router.get('/register',function ()
// {
//     return res.send("OK");
// });




module.exports = router;