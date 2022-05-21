const db = require("../db/db");

class FriendModel {
  static getAllFriendsFromDB = (userId) => {
    return db
      .select("friend_two", "accepted", {
        friend_first_name: "users.first_name",
        friend_last_name: "users.last_name",
        friend_one_id: "users.id",
      })
      .from("friends")
      .where({ friend_one: userId })
      .join("users", "users.id", "=", "friend_two")
      .union(function () {
        this.select("friend_one", "accepted", {
          friend_first_name: "users.first_name",
          friend_last_name: "users.last_name",
          friend_two_id: "users.id",
        })
          .from("friends")
          .where({ friend_two: userId })
          .join("users", "users.id", "=", "friend_one");
      });
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
