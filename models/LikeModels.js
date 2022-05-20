const db = require('../db/db')
const dbpool = require('../dbconfig')

//GET ALL LIKES FROM A POSt

function getLikesFromPost(post_id) {
    return dbpool.query("SELECT * likes FROM posts WHERE post_id = $1", [post_id])
    .then((results) => results.rows)
}
function createALike(post_id) {
    return db("likes").insert({post_id}).returning("*")
}
function deleteALike(post_id){
    return db("likes").where({post_id}).del().returning('*');
}




//Need a post id to reference
// Need to reference the likes within that post ID
// Problem: Don't know the route to that table
//Read One -- COmplete
// Read All -- Complete
//Delete One -- Complete
//Create One -- Complete
//Update One -- 

module.exports = {
    getLikesFromPost,
    createALike,
    deleteALike,
}