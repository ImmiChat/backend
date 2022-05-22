const db = require("../db/db");

class FriendModel {
  static getAllFriendsFromDB = (userId) => {
    return db
      .select("users.id", "first_name", "last_name", "email", "accepted")
      .from("friends")
      .where({ friend_two: userId })
      .join("users", "users.id", "=", "friend_one");
  };
  static getAllFriendsFromDBTwo = (userId) => {
    return db
      .select("users.id", "first_name", "last_name", "email", "accepted")
      .from("friends")
      .where({ friend_one: userId })
      .join("users", "users.id", "=", "friend_two");
  };

  static createFriendRequestFromDB = (userId, friendId) => {
    return db("friends")
      .insert({
        friend_one: userId,
        friend_two: friendId,
      })
      .returning("*");
  };

  static acceptFriendRequestFromDB = (userId, friendId) => {
    return db("friends")
      .update({ accepted: true })
      .where({ friend_two: userId, friend_one: friendId })
      .returning("*");
  };

  static deleteFriendFromDB = (userId, friendId) => {
    return db("friends")
      .del()
      .where(
        db.raw(`(friend_one = ${userId} and friend_two = ${friendId}) 
      or (friend_two = ${userId} and friend_one = ${friendId})
    `)
      )
      .returning("*");
  };
}

module.exports = FriendModel;
