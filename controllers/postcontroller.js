const postmodels = require("../models/postsmodels");

// Make sure to return after sending res back(done)

//HOME SCREEN
const home = async (req, res) => {
    return res.send("This is our screen working");
};

//GET ALL POSTS
const getAllPosts = async (req, res) => {
    const selectAllPosts = await postmodels.getAllPostsDB();
    return res.status(200).json(selectAllPosts);
};

// Get a single post by postId (Not user id)
//GET ALL POST FROM A SINGLE USER
const getASinglePost = async (req, res) => {
    const postID = parseInt(req.body.userID);
    const selectSinglePost = await postmodels.getAllPostsSingleUserDB(postID);
    return res.status(200).json(selectSinglePost);
};

// /posts and get userId from req.body

//MAKE NEW POST
const createNewPost = async (req, res) => {
    const postID = parseInt(req.body.id);
    const { content } = req.body;
    const makeNewPost = await postmodels.createNewPostDB(postID, content);
    return res.status(200).json(makeNewPost);
};

// /post/:id no need for userId
//UPDATE EXISTING BLOG
const updatePost = async (req, res) => {
    const postID = parseInt(req.body.postid);
    const { content } = req.body;
    const fixPost = await postmodels.updatePostDB(content, postID);
    return res.status(200).json(fixPost);
};

// /post/:id no need for userId
//DELETE EXISTING POST
const deletePost = async (req, res) => {
    const postID = parseInt(req.body.postid);
    const destroyPost = await postmodels.deleteOnePostDB(postID);
    return res.status(200).json(destroyPost);
};

module.exports = {
  home,
  getAllPosts,
  getASinglePost,
  createNewPost,
  updatePost,
  deletePost,
};
