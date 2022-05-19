const likeModels = require("../models/LikeModels")

const GetAllLikesFromASinglePost = async (req,res) => {
    const postID = req.params.id
    const GetLikesFromSinglePost = await likeModels.GetLikesFromPost(postID)
    return res.status(200).json(GetLikesFromSinglePost)
}
//Theoretically this function should get the post id and await the number of likes retrieved from 
//the function in likeModels and return it with a status of 200.