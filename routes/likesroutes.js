const { Router } = require("express");
const express = require ("express")
const likeControls = require("../controllers/likeControllers")
const Router = express.Router();


// Get Likes From A Single Post
Router.get("/post/:id/likes", likeControls.GetAllLikesFromAllPosts);



// Create A Like
Router.get("/post/:id/likes", likeControls.CreateALikeOnAPost);



// Delete a Like
Router.get("/like/:id", likeControls.DeleteALikeOnAPost);

module.exports = Router

