const Genre = require("../models/genre");
const mongoose = require("mongoose")

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
      const users = await Genre.find();
      const data = users.map((item) => item.Genre);
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  },
  editGenre: async (req, res) => {
    try {
      const data = req.body;
      const updateFields = {};

      if (data.newname) {
        updateFields.name = data.newname;
      }

      if (data.description) {
        updateFields.description = data.description
      }

      const result = await Genre.updateOne(
        { name: data.name },
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
      const data = req.body;
      const genreName = data.name;
      const deletedGenre = await Genre.deleteOne({ name: genreName });
      res.status(200).json(deletedGenre);
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  },
};
module.exports = genreController;
