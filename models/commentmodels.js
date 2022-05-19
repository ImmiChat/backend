const dbpool = require("../db/dbconfig");
const db = require("../db/db");

//GET ALL COMMENTS
function getAllCommentsDB() {
  return db("comments")
    .select("comments.post_id", db.raw("COUNT(*) as numberOfComments"))
    .groupBy("comments.post_id");
}

//GET ALL COMMENTS FROM A SINGLE USER
function getAllCommentsSingleUserDB(id) {
  return dbpool
    .query("SELECT * from comments WHERE id = $1", [id])
    .then((results) => results.rows);
}

function createNewCommentDB(user_id, post_id, comment_text) {
  return dbpool
    .query(
      "INSERT into comments(user_id, post_id, comment_text) VALUES ($1, $2, $3) RETURNING *",
      [user_id, post_id, comment_text]
    )
    .then((results) => results.rows[0]);
}

function updateCommentDB(post_id, user_id, comment_text) {
  return dbpool
    .query(
      "UPDATE comments SET post_id = $1 WHERE user_id = $2 AND comment_text = $3 RETURNING *",
      [post_id, user_id, comment_text]
    )
    .then((result) => result.rows[0]);
}

function deleteCommentDB(post_id, comment_text) {
  return dbpool.query(
    "DELETE FROM comments WHERE post_id = $1 AND comment_text = $2",
    [post_id, comment_text]
  );
}

module.exports = {
  getAllCommentsDB,
  getAllCommentsSingleUserDB,
  createNewCommentDB,
  updateCommentDB,
  deleteCommentDB,
};
