const express = require('express');
const router = express.Router();

// Mock database
const movies = [
  { id: 1, title: "The Dark Horizon", year: 2023, genre: "Action" },
  { id: 2, title: "Cosmic Odyssey", year: 2022, genre: "Sci-Fi" }
];

// GET all movies
router.get('/', (req, res) => {
  res.json(movies);
});

// POST new movie
router.post('/', (req, res) => {
  const newMovie = req.body;
  movies.push(newMovie);
  res.status(201).json(newMovie);
});

module.exports = router;