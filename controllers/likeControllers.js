const likeModels = require("../models/LikeModels")

const GetAllLikesFromASinglePost = async (req,res) => {
    const postID = req.params.id
    const GetLikesFromSinglePost = await likeModels.GetLikesFromPost(postID)
    return res.status(200).json(GetLikesFromSinglePost)
}
const CreateALikeOnAPost = async ( req,res) => {
    const {post_id} = req.body;
    const MakeALikeOnAPost = await likeModels.createALike(post_id)
    return res.status(200).json(MakeALikeOnAPost)
};
const DeleteALikeOnAPost = async (req,res) => {
    const{post_id} = req.params
    const deletedLike = await likeModels.deleteALike(post_id)
    return res.status(201).json(deletedLike)
}

//Theoretically this function should get the post id and await the number of likes retrieved from 
//the function in likeModels and return it with a status of 200.

module.exports = {
    GetAllLikesFromASinglePost,
    CreateALikeOnAPost,
    DeleteALikeOnAPost,
}