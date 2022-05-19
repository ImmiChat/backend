const express = require("express");
const FeedController = require("../controllers/FeedController");
const Router = express.Router();

Router.get("/feed", FeedController.getFeed);

Router.get("/likes", FeedController.getLikes);

module.exports = Router;
