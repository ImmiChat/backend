// // const dbpool = require('../dbconfig')

// //GET ALL POSTS
// function getAllPostsDB() {
//   return dbpool.query("SELECT * FROM posts").then((results) => results.rows);
// }

// //GET ALL POSTS FROM A SINGLE USER
// function getAllPostsSingleUserDB(postID) {
//   return dbpool
//     .query("SELECT * FROM posts WHERE user_id = $1", [postID])
//     .then((results) => results.rows);
// }

// //CREATE A POST
// function createNewPostDB(userID, postContent) {
//   return dbpool
//     .query("INSERT INTO posts (user_id, content) VALUES ($1, $2) RETURNING *", [
//       userID,
//       postContent,
//     ])
//     .then((results) => results.rows[0]);
// }

// //UPDATE EXISTING POST
// function updatePostDB(postContent, userID, postsID) {
//   return dbpool
//     .query(
//       "UPDATE posts SET content = $1 WHERE user_id = $2 AND post_id = $3 RETURNING *",
//       [postContent, userID, postID]
//     )
//     .then((results) => results.rows[0]);
// }

// //DELETE A POST
// function deleteOnePostDB(userID, postID) {
//   return dbpool.query("DELETE FROM posts WHERE user_id = $1 AND post_id = $2", [
//     userID,
//     postID,
//   ]);
// }

// module.exports = {
//   getAllPostsDB,
//   getAllPostsSingleUserDB,
//   createNewPostDB,
//   updatePostDB,
//   deleteOnePostDB,
// };
