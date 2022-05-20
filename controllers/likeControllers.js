const likeModels = require("../models/LikeModels")


//Hey Damon. This isn't how to write functions. it's pretty bad camel case. Also it would be helpful to shorten the functions just for writing purposes. 
// Also try to use try/catch error message in order to test this code out in your console before sending it to me to tetst. In order to make the process efficent make sure to work on changes and test the actual code
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
