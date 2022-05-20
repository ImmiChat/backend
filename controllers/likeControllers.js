const likeModels = require("../models/LikeModels")

const getAllLikesFromASinglePost = async (req,res) => {
    try{
    const postID = req.params.post_id
    const getLikesFromSinglePost = await likeModels.getLikesFromPost(postID)
    return res.status(200).json(getLikesFromSinglePost)
    } 
    catch(err) {
        res.status(404).json({ message:err.message})
    }
}
const createALikeOnAPost = async ( req,res) => {
    try{
    const postID = req.params.post_id;
    const makeALikeOnAPost = await likeModels.createALike(postID)
    return res.status(200).json(makeALikeOnAPost)
    } catch(err){
        res.status(404).json({message:err.message})
    }
};
const deleteALikeOnAPost = async (req,res) => {
    try{
    const postID = req.params.post_id
    const deletedLike = await likeModels.deleteALike(postID)
    return res.status(201).json(deletedLike)
    } catch(err){
        res.status(404).json({message:err.message})
    }
}

//Theoretically this function should get the post id and await the number of likes retrieved from 
//the function in likeModels and return it with a status of 200.

module.exports = {
    getAllLikesFromASinglePost,
    createALikeOnAPost,
    deleteALikeOnAPost,
}
