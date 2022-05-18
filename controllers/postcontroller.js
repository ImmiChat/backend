const postmodels = require("../models/postmodel");

// Make sure to return after sending res back(done)

//HOME SCREEN
const home = async (req, res) => {
<<<<<<< HEAD
  return res.send("This is our screen working");
=======
    res.status(200).send("This is our screen working");
>>>>>>> efda707c572190b641cacb2a9f7a8cae07e9512d
};

//GET ALL POSTS
const getAllPosts = async (req, res) => {
  const selectAllPosts = await postmodels.getAllPostsDB();
  return res.status(200).json(selectAllPosts);
};

// Get a single post by postId (Not user id)
//GET ALL POST FROM A SINGLE USER
const getASinglePost = async (req, res) => {
<<<<<<< HEAD
  const postID = parseInt(req.body.userID);
  const selectSinglePost = await postmodels.getAllPostsSingleUserDB(postID);
  return res.status(200).json(selectSinglePost);
=======
    const postID = req.params.id;
    //console.log(postID)
    const selectSinglePost = await postmodels.getAllPostsSingleUserDB(postID);
    return res.status(200).json(selectSinglePost);
>>>>>>> efda707c572190b641cacb2a9f7a8cae07e9512d
};

// /posts and get userId from req.body

//MAKE NEW POST
const createNewPost = async (req, res) => {
<<<<<<< HEAD
  const postID = parseInt(req.body.id);
  const { content } = req.body;
  const makeNewPost = await postmodels.createNewPostDB(postID, content);
  return res.status(200).json(makeNewPost);
=======
    
    const {id, content} = req.body;
    const makeNewPost = await postmodels.createNewPostDB(id, content);
    console.log(makeNewPost)
    return res.status(200).json(makeNewPost);
    
>>>>>>> efda707c572190b641cacb2a9f7a8cae07e9512d
};

// /post/:id no need for userId
//UPDATE EXISTING POST 
const updatePost = async (req, res) => {
<<<<<<< HEAD
  const postID = parseInt(req.body.postid);
  const { content } = req.body;
  const fixPost = await postmodels.updatePostDB(content, postID);
  return res.status(200).json(fixPost);
=======
    const id = req.params.id;
    const body = req.body.body;
    const updatedPost = await postmodels.updatePostDB(id, body);
    return res.status(201).json(updatedPost);
>>>>>>> efda707c572190b641cacb2a9f7a8cae07e9512d
};

// /post/:id no need for userId
//DELETE EXISTING POST
const deletePost = async (req, res) => {
<<<<<<< HEAD
  const postID = parseInt(req.body.postid);
  const destroyPost = await postmodels.deleteOnePostDB(postID);
  return res.status(200).json(destroyPost);
=======
    const {id} = req.params;
    const deletedPost = await postmodels.deleteOnePostDB(id);
    return res.status(201).json(deletedPost);
>>>>>>> efda707c572190b641cacb2a9f7a8cae07e9512d
};

module.exports = {
home,
getAllPosts,
getASinglePost,
createNewPost,
updatePost,
deletePost
};
