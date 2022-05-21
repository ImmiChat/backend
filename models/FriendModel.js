const db = require("../db/db");

class FriendModel {
  static getAllFriendsFromDB = (userId) => {
    return db
      .select("friend_two", "accepted", {
        friend_first_name: "users.first_name",
        friend_last_name: "users.last_name",
      })
      .from("friends")
      .where({ friend_one: userId })
      .join("users", "users.id", "=", "friend_two")
      .union(function () {
        this.select("friend_one", "accepted", {
          friend_first_name: "users.first_name",
          friend_last_name: "users.last_name",
        })
          .from("friends")
          .where({ friend_two: userId })
          .join("users", "users.id", "=", "friend_one");
      });
  };
}

module.exports = FriendModel;
