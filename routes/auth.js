const express = require('express');
const router= express.Router();
const authController = require('../controllers/auth_controller');

router.get('/auth',authController.auth);

module.exports=router;