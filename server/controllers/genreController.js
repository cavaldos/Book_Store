const Genre = require("../models/genre");
const Book = require("../controllers/bookController")
const mongoose = require("mongoose");
const bookController = require("../controllers/bookController");

const genreController = {
  addGenre: async (req, res) => {
    try {
      const data = req.body;
      ngenres = await Genre.countDocuments({}).exec();
      const newGenre = new Genre({
        name: data.name,
        description: data.description
      });

      await newGenre.save();
      res.status(201).json(newGenre);
    } catch (err) {
      console.log(err)
      res.status(500).json({
        message: err.message,
      });
    }
  },
  getGenre: async (req, res) => {
    try {
      const genreName = req.params.name;
      const genreInfo = Genre.find( {name: genreName} );
      const books = Book.findBook( {genre: genreName} );
      data.genre = genreInfo;
      data.books = books;
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  },
  editGenre: async (req, res) => {
    try {
      const name = req.params.name;
      const data = req.body;
      const updateFields = {};

      if (data.name) {
        updateFields.name = data.name;
      }
      if (data.description) {
        updateFields.description = data.description
      }
      const result = await Genre.updateOne(
        { name: name },
        {
          $set: {
            updateFields
          },
        }
      );
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  },
  getAllGenres: async (req, res) => {
    try {
      const { page = 1, pageSize = 12 } = req.query;
      const pageNumber = parseInt(page);
      const pageSizeNumber = parseInt(pageSize);
      // Calculate the number of documents to skip based on the page number and page size.
      const skipDocuments = pageSizeNumber * (pageNumber - 1);
      // Fetch genres with pagination from the database.
      const totalGenres = await Genre.countDocuments();
      const totalPages = Math.ceil(totalGenres / pageSizeNumber);
      const genres = await Genre.find().skip(skipDocuments).limit(pageSizeNumber);
      // Generate an array of page numbers [1, 2, 3, ...]
      const pageNumbersArray = Array.from(
        { length: totalPages },
        (_, i) => i + 1
      );
      res.status(200).json({
        genres,
        totalPages,
        currentPage: pageNumber,
        pageNumbers: pageNumbersArray,
      });
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  },
  deleteGenre: async (req, res) => {
    try {
      const genreName = data.params.name;
      const deletedGenre = await Genre.deleteOne({ name: genreName });
      const deletedBooks = await bookController.deleteAllBooksWith({ genre: genreName});
      res.status(200).json({deletedGenre, deletedBooks});
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  },
};
module.exports = genreController;
