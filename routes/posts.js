const express = require("express");
const router = express.Router();
const Movie = require("../models/Post");

router
  .route("/")
  .get(async (req, res) => {
    try {
      const data = await Movie.find();
      res.json(data);
    } catch (error) {
      res.json({ error_message: error.message });
    }
  })

  .post(async (req, res) => {
    try {
      const movie = new Movie({
        movie_title: req.body.movie_title,
        image_URL: req.body.image_URL,
        rating: req.body.rating,
      });
      const savedMovie = await movie.save();
      const data = await Movie.find();
      res.json(data);
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "unable to add data",
        errorMessage: error.message,
      });
    }
  });

router.route("/:movieId").delete(async (req, res) => {
  try {
    const removedMovie = await Movie.remove({ _id: req.params.movieId });
    res.json(removedMovie);
  } catch (error) {
    res.json({ error_message: error.message });
  }
});


module.exports = router;
