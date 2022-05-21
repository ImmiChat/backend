const express = require("express");
const UserController = require("../controllers/UserController");
const FriendController = require("../controllers/FriendController");
const router = express.Router();

router.get("/user", UserController.getAllUsers);

router.get("/user/:id/friends", FriendController.getAllFriends);

router.put("/user/:id", UserController.updateUser);

module.exports = router;
