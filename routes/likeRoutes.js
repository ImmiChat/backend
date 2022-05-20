const express = require ("express");
const likeControls = require('../controllers/likesControllers');
const Router = express.Router();

// Get Likes From A Single Post
Router.get("/posts/:id/likes", likeControls.getAllLikesFromSinglePost);


// Create A Like
Router.post("/posts/:id/likes", likeControls.createALikeOnAPost);


// Delete a Like
Router.delete("/posts/:id/likes", likeControls.deleteALikeOnAPost);

module.exports = Router;