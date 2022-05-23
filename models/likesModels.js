const db = require('../db/db')
const dbpool = require('../db/dbconfig')

//GET ALL LIKES FROM A POSt
function getLikesFromPost(post_id) {
    return dbpool.query("SELECT COUNT(*) FROM likes WHERE post_id = $1", [post_id]).then((results) => results.rows[0])
}

//While we got the model working it only works for the post_id of 1 and the user_id of 2
function createALike(user_id, post_id) {
    return dbpool
    .query('INSERT INTO likes(post_id, user_id) VALUES ($1, $2) RETURNING *', [post_id, user_id]).then(results => results.rows[0])
}

function deleteALike(user_id, post_id){
    return dbpool.query('DELETE FROM likes WHERE user_id = $1 AND post_id = $2 RETURNING *', [post_id, user_id]).then(results => results.rows[0]);
}
module.exports = {
    getLikesFromPost,
    createALike,
    deleteALike,
} 