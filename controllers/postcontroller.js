const postmodels = require('../models/postsmodels')


//HOME SCREEN
const home = async(req, res) => {
    res.send('This is our screen working')
}


//GET ALL POSTS
const getAllPosts = async(req, res) => {
    let selectAllPosts = await postmodels.getAllPostsDB()
    res.status(200).json(selectAllPosts)
}


//GET ALL POST FROM A SINGLE USER
const getAllPostsSingleUser = async(req, res) => {
    const userID = parseInt(req.params.id)
    let selectSinglePost = await postmodels.getAllPostsSingleUserDB(userID)
    res.status(200).json(selectSinglePost)
}


//MAKE NEW POST
const createNewPost = async(req, res) => {
    const userID = parseInt(req.params.id)
    const {content} = req.body
    let makeNewPost = await postmodels.createNewPostDB(userID, content)
    res.status(200).json(makeNewPost)
}


//UPDATE EXISTING BLOG
const updatePost = async(req, res) => {
    const userID = parseInt(req.params.id)
    const postID = parseInt(req.params.postid)
    const {content} = req.body
    let fixPost = await postmodels.updatePostDB(content, userID, postID)
    res.status(200).json(fixPost)
}


//DELETE EXISTING POST
const deletePost = async(req, res) => {
    const userID = parseInt(req.params.id)
    const postID = parseInt(req.params.postid)
    let destroyPost = await postmodels.deleteOnePostDB(userID, postID)
    res.status(200).json(destroyPost);
}

module.exports = {
    home,
    getAllPosts,
    getAllPostsSingleUser,
    createNewPost,
    updatePost,
    deletePost
}