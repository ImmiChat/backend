const express = require('express')
const postcontrols = require('../controllers/postcontrollers')
const Router = express.Router()

//HOME SCREEN
Router.get('/home', postcontrols.home)


//GET ALL BLOG
Router.get('/posts', postcontrols.getAllPosts)


//GET ALL BLOGS FROM A SINGLE USER
Router.get('/posts/:id', postcontrols.getAllPostsSingleUser)


//MAKE NEW BLOG
Router.post('/posts/:id', postcontrols.createNewPost)


//UPDATE EXISTING BLOG
Router.put('/posts/:id/:postid', postcontrols.updatePost)


//DELETE EXISTING BLOG
Router.delete('/posts/:id/:postid', postcontrols.deletePost)

module.exports = Router;