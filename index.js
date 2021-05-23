const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv/config");

app.use(cors());
app.use(bodyParser.json());

const postsRoute = require("./routes/posts");

app.use("/post", postsRoute);

app.get("/", (req, res) => {
  res.send("on home");
});

mongoose
  .connect(process.env.DB_CONNECTION, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("DB successfully connected"))
  .catch((error) => console.error("mongoose connection failed...", error));

app.listen(3000, () => {
  console.log("server started");
});
