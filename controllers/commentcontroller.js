const commentmodels = require('../models/commentmodels');

const getAllComments = async (req, res) => {
    const selectAllComments = await commentmodels.getAllCommentsDB();
    return res.status(200).json(selectAllComments)
}

const getAllCommentsSingleUser = async(req, res) => {
    try {
        const commentID = req.params.id;
        const postID = req.post_id;
        const singleComment = await commentmodels.getAllCommentsSingleUserDB(commentID, postID);
        console.log(commentID);
        return res.status(200).json(singleComment)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

// to test we're passing the userID
//In the front end it also needs to be passed into the body 
//This is fully working 
const createNewComment = async(req, res) => {
    try {
        //console.log(req.params)
        const postID = req.params.id
        const userID = req.body.user_id
        const commentText = req.body.comment_text;
        //console.log(commentText)
        const makeNewComment = await commentmodels.createNewCommentDB(postID, userID, commentText);
        
        return res.status(200).json(makeNewComment)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

//This is working but it's not saving to the back end will come back to this later 
const updateComment = async(req, res) => {
    try {
       // console.log(postID)
        const postID = req.params.id;
        //console.log(userID)
        const userID = req.body.user_id;
        //console.log(commentText)
        const commentText = req.body.comment_text;
        //console.log(commentText)
        const fixComment = await commentmodels.updateCommentDB(postID, userID, commentText);
        return res.status(200).json(fixComment)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

const deleteComment = async(req, res) => {
    try {
        // console.log(postID)
        const postID = req.params.id;
        //console.log(userID)
        const userID = req.body.user_id;
        //console.log(commentText)
        const commentText = req.body.comment_text;
        //console.log(commentText)
        const destroyComment = await commentmodels.deleteCommentDB(postID, userID, commentText)
        return res.status(200).json(destroyComment)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}



module.exports = {
    getAllComments,
    getAllCommentsSingleUser,
    createNewComment,
    updateComment,
    deleteComment
}