const express = require('express');
const UserController = require('../controllers/UserController');
const router = express.Router()


router.put('/user/:id', UserController.updateUser)


module.exports = router;