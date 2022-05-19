const dbpool = require('../dbconfig')

//GET ALL LIKES FROM A POSt
function GetLikesFromPost(postID) {
    return dbpool.query(`SELECT LIKES FROM POSTS WHERE id = ${postID}`)
    .then((results) => results.rows)
}
//Need a post id to reference
// Need to reference the likes within that post ID
// Problem: Don't know the route to that table

module.exports = {
    GetLikesFromPost,
}