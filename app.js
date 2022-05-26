const express = require("express");
const path = require("path");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/AuthRouter");
const postRoutes = require("./routes/postroutes");
const commentRoutes = require("./routes/commentroutes");
const likeRoutes = require("./routes/likeRoutes");
const FeedRouter = require("./routes/FeedRouter");
const userRoutes = require("./routes/UserRouter");
const chatRouter = require("./routes/ChatRoute");
const app = express();

// Create server using http and express to setup socket
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// Listens to connection event
io.on("connection", (socket) => {
  console.log(socket.id);

  // Listening to chat
  socket.on("chat", (payload) => {
    socket.broadcast.emit("receive_message", payload);
  });
  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
  });
});

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
app.use(chatRouter);

app.get("/", (req, res) => {
  res.status(200).send("Testing Testing 1 2 3");
});

//Listen to the port
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
