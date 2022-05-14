const express = require("express");
const postcontrols = require("../controllers/postcontrollers");
const Router = express.Router();

//HOME SCREEN
Router.get("/home", postcontrols.home);

//GET ALL BLOG
// This is good
Router.get("/posts", postcontrols.getAllPosts);

// GET ALL BLOGS FROM A SINGLE USER
// router.get(/users/:id/posts)

// Get a single post by id

// This is getting a single post by id. Not All posts from single User
Router.get("posts/:id/", postcontrols.getAllPostsSingleUser);

// MAKE NEW BLOG
// /posts
// body:userId

//
Router.post("/posts", postcontrols.createNewPost);

// /post/:id
// id ^ here is postId
//UPDATE EXISTING BLOG
Router.put("/posts/:id/", postcontrols.updatePost);

// /post/:id
//DELETE EXISTING BLOG
Router.delete("/posts/:id/", postcontrols.deletePost);

// Middleware that checks if the user is the same

module.exports = Router;
