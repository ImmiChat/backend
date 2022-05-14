const postmodels = require("../models/postsmodels");

// Make sure to return after sending res back

//HOME SCREEN
const home = async (req, res) => {
  res.send("This is our screen working");
};

//GET ALL POSTS
const getAllPosts = async (req, res) => {
  const selectAllPosts = await postmodels.getAllPostsDB();
  return res.status(200).json(selectAllPosts);
};

// Get a single post by postId (Not user id)
//GET ALL POST FROM A SINGLE USER
const getAllPostsSingleUser = async (req, res) => {
  const userID = parseInt(req.params.id);
  let selectSinglePost = await postmodels.getAllPostsSingleUserDB(userID);
  res.status(200).json(selectSinglePost);
};

// /posts and get userId from req.body

//MAKE NEW POST
const createNewPost = async (req, res) => {
  const userID = parseInt(req.params.id);
  const { content } = req.body;
  let makeNewPost = await postmodels.createNewPostDB(userID, content);
  res.status(200).json(makeNewPost);
};

// /post/:id no need for userId
//UPDATE EXISTING BLOG
const updatePost = async (req, res) => {
  const userID = parseInt(req.params.id);
  const postID = parseInt(req.params.postid);
  const { content } = req.body;
  let fixPost = await postmodels.updatePostDB(content, userID, postID);
  res.status(200).json(fixPost);
};

// /post/:id no need for userId
//DELETE EXISTING POST
const deletePost = async (req, res) => {
  const userID = parseInt(req.params.id);
  const postID = parseInt(req.params.postid);
  let destroyPost = await postmodels.deleteOnePostDB(userID, postID);
  res.status(200).json(destroyPost);
};

module.exports = {
  home,
  getAllPosts,
  getAllPostsSingleUser,
  createNewPost,
  updatePost,
  deletePost,
};
