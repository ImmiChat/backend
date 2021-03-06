const FriendModel = require("../models/FriendModel");

class FriendController {
  static getAllFriends = async (req, res) => {
    const userId = req.params.id;
    const friends = (await FriendModel.getAllFriendsFromDB(userId)).map(
      (friend) => ({
        ...friend,
        requested: false,
      })
    );
    const friendsTwo = (await FriendModel.getAllFriendsFromDBTwo(userId)).map(
      (friend) => ({
        ...friend,
        requested: true,
      })
    );
    return res.status(201).json([...friends, ...friendsTwo]);
  };

  static createFriendRequest = async (req, res) => {
    const userId = req.params.id;
    const friendId = req.body.id;
    const friendRequest = await FriendModel.createFriendRequestFromDB(
      userId,
      friendId
    );
    return res.status(201).json(friendRequest);
  };

  static acceptFriendRequest = async (req, res) => {
    const userId = req.params.id;
    const friendId = req.body.id;
    const acceptedFriendRequest = await FriendModel.acceptFriendRequestFromDB(
      userId,
      friendId
    );
    return res.status(201).json(acceptedFriendRequest);
  };

  static deleteFriend = async (req, res) => {
    const userId = req.params.id;
    const friendId = req.body.id;
    const deletedFriend = await FriendModel.deleteFriendFromDB(
      userId,
      friendId
    );
    return res.status(201).json(deletedFriend);
  };
}

module.exports = FriendController;
