const express = require('express');
const userrouter = express.Router();
const UserController = require('../controllers/UserController');
const upload = require("../config/multer");

// user resgistraion
userrouter.post('/registration',UserController.userRegistration);


module.exports = userrouter;
