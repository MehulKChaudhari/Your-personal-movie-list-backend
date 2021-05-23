const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

const Post = require("./models/Post");

app.get("/", (req, res) => {
  res.send("get request");
});

mongoose
  .connect(process.env.DB_CONNECTION, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("successfully connected"))
  .catch((error) => console.error("mongoose connection failed...", error));

app.post("/post", (req, res) => {
  
});
app.listen(3000, () => {
  console.log("server started");
});
