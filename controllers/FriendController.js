const FriendModel = require("../models/FriendModel");

class FriendController {
  static getAllFriends = async (req, res) => {
    const userId = req.params.id;
    const friends = await FriendModel.getAllFriendsFromDB(userId);
    return res.status(201).json(friends);
  };
}

module.exports = FriendController;
