const express = require('express');

const router= express.Router();
const authController = require('../controllers/users_controller');

router.get('/profile',authController.profile);
router.get('/auth',require('./auth'));

module.exports=router;