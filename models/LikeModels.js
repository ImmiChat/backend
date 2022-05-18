const dbpool = require('../dbconfig')

//GET ALL LIKES FROM A POSt
function getAllLikesFromPost() {
    return dbpool.query('SELECT gi')
}
//Need a post id to reference
// Need to reference the likes within that post ID
// Problem: Don't know the route to that table