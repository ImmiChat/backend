const postmodels = require("../models/postmodel");

// Make sure to return after sending res back(done)

//HOME SCREEN
const home = async (req, res) => {
    res.status(200).send("This is our screen working");
};

//GET ALL POSTS
const getAllPosts = async (req, res) => {
    const selectAllPosts = await postmodels.getAllPostsDB();
    return res.status(200).json(selectAllPosts);
};

// Get a single post by postId (Not user id)
//GET ALL POST FROM A SINGLE USER
const getASinglePost = async (req, res) => {
    const postID = req.params.id;
    //console.log(postID)
    const selectSinglePost = await postmodels.getAllPostsSingleUserDB(postID);
    return res.status(200).json(selectSinglePost);
};

// /posts and get userId from req.body

//MAKE NEW POST
const createNewPost = async (req, res) => {
    try {
    //const postID = req.body.id;
    const { body } = req.body;
    const makeNewPost = await postmodels.createNewPostDB(body);
    return res.status(200).json(makeNewPost);
    } catch(err) {
        res.status(404).json({ message: err.message })
    }
};

// /post/:id no need for userId
//UPDATE EXISTING POST 
const updatePost = async (req, res) => {
    try {
    //const postID = req.body.id;
    const id = req.body.id
    const user_id = req.body.user_id
    const { body } = req.body;
    const fixPost = await postmodels.updatePostDB(id, user_id, body);
    console.log(fixPost)
    return res.status(200).json(fixPost);
    //console.log()
    } catch(err) {
        res.status(404).json({ message: err.message })
    }
};

// /post/:id no need for userId
//DELETE EXISTING POST
const deletePost = async (req, res) => {
    try {
    const postID = parseInt(req.body.id);
    const destroyPost = await postmodels.deleteOnePostDB(postID);
    return res.status(200).json(destroyPost);
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
};

module.exports = {
home,
getAllPosts,
getASinglePost,
createNewPost,
updatePost,
deletePost
};
