const express = require("express");
const UserController = require("../controllers/UserController");
const FriendController = require("../controllers/FriendController");
const router = express.Router();

router.get("/user", UserController.getAllUsers);

router.get("/user/:id/friends", FriendController.getAllFriends);

router.post("/user/:id/friends", FriendController.createFriendRequest);

router.put("/user/:id/friends", FriendController.acceptFriendRequest);

router.put("/user/:id", UserController.updateUser);

module.exports = router;
