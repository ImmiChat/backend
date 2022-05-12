const express = require('express');
const AuthController = require("../controllers/AuthController")
const router = express.Router();


router.post('/login', AuthController.validateRegistration);

router.post('/register', AuthController.validLogin)

router.post('/logout', AuthController.logOut);

module.exports = router;