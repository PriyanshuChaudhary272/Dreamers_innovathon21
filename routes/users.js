const express = require('express');

const router= express.Router();
const userController = require('../controllers/users_controller');


router.get('/profile',userController.profile);
router.use('/auth',require('./auth'));

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