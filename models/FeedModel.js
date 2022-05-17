const db = require("../db/db");

class FeedModel {
  static getFeedFromDB = () => {
    return db("users")
      .join("posts", "users.id", "=", "posts.user_id")
      .select(
        "users.first_name",
        "users.last_name",
        "posts.body",
        "posts.updated_at"
      );
  };
}

module.exports = FeedModel;
