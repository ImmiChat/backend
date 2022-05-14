const express = require("express");
const postcontrols = require("../controllers/postcontrollers");
const Router = express.Router();

//HOME SCREEN
Router.get("/home", postcontrols.home);

//GET ALL BLOG
Router.get("/posts", postcontrols.getAllPosts);

// GET ALL BLOGS FROM A SINGLE USER
// router.get(/users/:id/posts)

// Get a single post by id
Router.get("/posts/:id", postcontrols.getAllPostsSingleUser);

// MAKE NEW BLOG
// /posts
// body:userId

Router.post("/posts/:id", postcontrols.createNewPost);

// /post/:id
// id ^ here is postId
//UPDATE EXISTING BLOG
Router.put("/posts/:id/:postid", postcontrols.updatePost);

// /post/:id
//DELETE EXISTING BLOG
Router.delete("/posts/:id/:postid", postcontrols.deletePost);

// Middleware that checks if the user is the same

module.exports = Router;
