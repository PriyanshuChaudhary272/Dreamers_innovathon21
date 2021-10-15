const express = require('express');

const router= express.Router();
const userController = require('../controllers/users_controller');


router.get('/profile/:username',userController.profile);
router.use('/auth',require('./auth'));
router.use('/posts',require('./posts'));


//get all users
router.get('/all',userController.all);
//update user
router.put('/:id',userController.update);
//delete user
router.delete('/:id',userController.delete);
//get a user
router.get('/:id',userController.get);
//follow a user
router.put('/:id/follow',userController.follow);
//unfolow a user
router.put('/:id/unfollow',userController.unfollow);
module.exports=router;
