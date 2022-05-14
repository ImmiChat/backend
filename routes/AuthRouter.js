const express = require("express");
const AuthController = require("../controllers/AuthController");
const router = express.Router();

router.post("/register", AuthController.validateRegistration);

router.post("/login", AuthController.validateLogin);

router.post("/authenticate", AuthController.authenticate);

// router.post('/logout', AuthController.logOut);

module.exports = router;
