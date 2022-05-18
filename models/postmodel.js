const dbpool = require('../db/dbconfig')

//GET ALL POSTS
function getAllPostsDB(){
  return dbpool.query('SELECT * FROM posts').then(results => results.rows)
}


//GET ALL POSTS FROM A SINGLE USER
function getAllPostsSingleUserDB(postID){
  return dbpool.query('SELECT * FROM posts WHERE id = $1', [postID]).then(results => results.rows)
  }


//CREATE A POST
function createNewPostDB(body){
  return dbpool.query('INSERT into posts(body) VALUES ($1) RETURNING *', [body]).then(results => results.rows[0])
}


//UPDATE EXISTING POST
function updatePostDB(id, user_id, body){
  return dbpool.query('UPDATE posts SET id = $1 WHERE user_id = $2 AND body = $3 RETURNING *', [id, user_id, body]).then(results => results.rows[0])
}


//DELETE A POST
function deleteOnePostDB(userID, postID){
    return dbpool.query('DELETE FROM posts WHERE user_id = $1 AND post_id = $2', [userID, postID])
}


module.exports = {
    getAllPostsDB,
    getAllPostsSingleUserDB,
    createNewPostDB,
    updatePostDB,
    deleteOnePostDB
}