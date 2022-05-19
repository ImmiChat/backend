const db = require("../db/db");

class FeedModel {
  static getFeedFromDB = () => {
    return db("users")
      .join("posts", "users.id", "=", "posts.user_id")
      .select(
        "users.first_name",
        "users.last_name",
        "posts.body",
        "posts.updated_at",
        "posts.id",
        "posts.user_id"
      )
      .orderBy("posts.updated_at", "desc");
  };
  static getLikesFromDB = () => {
    return db("likes")
      .select("likes.post_id", db.raw("COUNT(*) as numberOflikes"))
      .groupBy("likes.post_id");
  };
}

module.exports = FeedModel;
