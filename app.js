const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/AuthRouter");
const cors = require("cors");
const FeedRouter = require("./routes/FeedRouter");
const postRoutes = require("./routes/postroutes");
const app = express();

//const dbpool = require(./dbconfig)

//This is the port
const PORT = 9000;

//middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(authRoutes);
app.use(FeedRouter);
// app.use(postRoutes);

app.get("/", (req, res) => {
  res.status(200).send("Testing Testing 1 2 3");
});

//Listen to the port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
