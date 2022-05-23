//you dont need two routers. 
const express = require ("express")
const likeControls = require("../controllers/likeControllers")
const Router = express.Router();

//everything else here is fine thanks to ray reviewing but I hope you understand to change every function after the likeControls.
// Get Likes From A Single Post
Router.get("/post/:id/likes", likeControls.getAllLikesFromASinglePost);



// Create A Like
Router.post("/post/:id/likes", likeControls.createALikeOnAPost);



// Delete a Like
Router.delete("/like/:id", likeControls.deleteALikeOnAPost);

module.exports = Router

