const db = require('../db/db')
const dbpool = require('../dbconfig')

//GET ALL LIKES FROM A POSt

//make sure that you use the proper text written in the migrations when you use your parameters. 
//Also remember shorter function names and camel case <:)
function GetLikesFromPost(post_id) {
//This query right here is a good attempt but the likes and posts should be lower case 
    return dbpool.query(`SELECT LIKES FROM POSTS WHERE id = ${post_id}`)
    .then((results) => results.rows)
}

//these last two are a better example of what to do 
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
