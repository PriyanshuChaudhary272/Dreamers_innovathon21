// // module.exports.auth = function(req,res){
// //     res.send("<h1>Hey this is Auth </h1>");
// // };  
const User = require("../models/Users");
const bcrypt = require('bcrypt');
const { default: userEvent } = require("@testing-library/user-event");

module.exports.auth = async (req, res) => {
    
    // const user = await new User({
    //     username: "Nikh",
    //     email: "nikl@gmail.com",
    //     password: "124"
    // });

    // await user.save();
    // return res.send('ok');

   

    try{
        //generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword =await bcrypt.hash(req.body.password,salt);

        //created new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
    
        });
        //saved user and responded 
        const user =await newUser.save();
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
    };

};


module.exports.login = async (req, res) => {

    try{
    const user = await User.findOne({email:req.body.email});
    !user &&res.status(404).send("user not found");

    const validPassword =await bcrypt.compare(req.body.password,user.password);
    !validPassword && res.status(400).json("wrong password");

    res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
    }; 

    
};