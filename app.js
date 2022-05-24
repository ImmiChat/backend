const express = require("express");
const path = require("path");
const http = require('http');
const cors = require("cors");
const {Server } = require('socket.io')
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/AuthRouter");
const postRoutes = require("./routes/postroutes");
const commentRoutes = require("./routes/commentroutes");
const likeRoutes = require("./routes/likeRoutes")
const FeedRouter = require("./routes/FeedRouter");
const userRoutes = require("./routes/UserRouter");
const app = express();

// Create server using http and express to setup socket
const server = http.createServer(app);

//const dbpool = require(./dbconfig)

//This is the port
const PORT = 9000;

//middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(authRoutes);
app.use(FeedRouter);
app.use(postRoutes);
app.use(commentRoutes);
app.use(likeRoutes);
app.use(userRoutes);

app.get("/", (req, res) => {
  res.status(200).send("Testing Testing 1 2 3");
});

//Listen to the port
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
