const express = require('express');

const router = express.Router();

const userController = require('../controllers/login');

router.post('/user/signup',userController.addUser);

module.exports = router;    