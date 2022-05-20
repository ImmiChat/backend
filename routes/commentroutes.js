const express = require("express");
const commentControls = require("../controllers/commentcontroller");
const Router = express.Router();

//GET ALL Comments and group by posts
Router.get("/comments", commentControls.getAllComments);

//GET A SINGLE COMMENT BY ID
Router.get("/comments/:id/", commentControls.getAllCommentsSingleUser);

//CREATE A NEW COMMENT
Router.post("/comments/:id", commentControls.createNewComment);

//UPDATE COMMENT
Router.put("/comments/:id", commentControls.updateComment);

//DELETE COMMENT
Router.delete("/comments/:id", commentControls.deleteComment);

module.exports = Router;
