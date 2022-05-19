const db = require('../db/db')
const dbpool = require('../dbconfig')

//GET ALL LIKES FROM A POSt
function GetLikesFromPost(post_id) {
    return dbpool.query(`SELECT LIKES FROM POSTS WHERE id = ${post_id}`)
    .then((results) => results.rows)
}

function createALike(user_id, post_id) {
    return db("likes").insert({user_id, post_id}).returning("*")
}
function deleteALike(user_id,post_id){
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
    GetLikesFromPost,
    createALike,
    deleteALike,
}