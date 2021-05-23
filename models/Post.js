const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  movie_title: {
    type: String,
    required: true,
  },
  image_URL: String,
  rating: Number,
});

module.exports = mongoose.model("Movie", PostSchema);
