const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const upload = require("../config/multer");

// user resgistraion
router.post('/registration',UserController.userRegistration);


module.exports = router;
