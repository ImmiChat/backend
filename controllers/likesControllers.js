const likeModels = require("../models/likesModels")

const getAllLikesFromSinglePost = async (req,res) => {
    try {
    const postID = req.params.id
    const getLikes = await likeModels.getLikesFromPost(postID)
    return res.status(200).json(getLikes)
    } catch(err) {
        res.status(404).json({ message: err.message })
    }
}
const createALikeOnAPost = async ( req,res) => {
    try {
    const postID = req.params.id
    const userID = req.params.id
    const createALike = await likeModels.createALike(userID, postID)
    console.log(createALike)
    return res.status(200).json(createALike)
    } catch(err) {
        res.status(404).json({ message: err.message })
    }
};

const deleteALikeOnAPost = async (req,res) => {
    try{
    const postID = req.params.id
    //this has to be the key name for the body object that is being sent with the delete request
    //when the user clicks on the unlike button it has to fire a fetch(delete) request
    const userID = req.body.user_id
    const deletedLike = await likeModels.deleteALike(userID, postID)
    return res.status(201).json(deletedLike)
    } catch (err) {
        res.status(404).json({ message: err.messge })
    }
}

module.exports = {
    getAllLikesFromSinglePost,
    createALikeOnAPost,
    deleteALikeOnAPost,
} 