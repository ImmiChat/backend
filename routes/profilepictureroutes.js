const express = require('express');
const Router = express.Router();
const path = require('path');
const multer = require('multer');
const app = express();
//this storage object is where all the specifications of our file is determined 
//const upload = multer({storage: storage}

const storage = multer.diskStorage({
destination: (req, file, cb) => {
    cb(null, 'images')
}, 
filename: (req,file,cb) => {
    console.log(file)
    cb(null, Date.now() + path.extname(file.originalname))
    }
})

//this storage object is where all the specifications of our file is determined 
const upload = multer({storage: storage})

//routes
app.get("/upload", (req, res) => {
    res.render("upload")
})

app.post("/upload", upload.single("image"), (req, res) => {
    res.send("Image Uploaded")
});


module.exports = Router;