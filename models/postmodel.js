const dbpool = require("../db/dbconfig");
const db = require("../db/db");

//GET ALL POSTS
function getAllPostsDB() {
  return dbpool.query("SELECT * FROM posts").then((results) => results.rows);
}

//GET ALL POSTS FROM A SINGLE USER
function getAllPostsSingleUserDB(postID) {
  return dbpool
    .query("SELECT * FROM posts WHERE id = $1", [postID])
    .then((results) => results.rows);
}

//CREATE A POST
function createNewPostDB(userID, postContent) {
  return db("posts").insert({ user_id: userID, body: postContent }).returning('*');
}

//UPDATE EXISTING POST
function updatePostDB(id, body) {
  return db('posts').where({id}).update({body}).returning('*');
}

//DELETE A POST
function deleteOnePostDB(postID) {
  return db("posts").where({id: postID}).del().returning('*');
}

module.exports = {
  getAllPostsDB,
  getAllPostsSingleUserDB,
  createNewPostDB,
  updatePostDB,
  deleteOnePostDB,
};
