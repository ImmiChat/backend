const express = require("express");
const postcontrols = require("../controllers/postcontroller");
const Router = express.Router();

//HOME SCREEN
Router.get("/home", postcontrols.home);

//GET ALL POSTS
Router.get("/posts", postcontrols.getAllPosts);

//GET A SINGLE POST BY ID 
Router.get("/posts/:id/", postcontrols.getASinglePost);


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
