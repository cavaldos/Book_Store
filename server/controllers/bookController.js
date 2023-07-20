const Book = require("../models/book");

const bookController = {
  addBook: async (req, res) => {
    try {
      res.json({ message: "addbook" });
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  },
  editBook: async (req, res) => {
    try {
      res.json({ message: "editbook" });
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  },
  getAllBooks: async (req, res) => {
    try {
      const users = await Book.find();
      res.status(200).json(users);
      // res.json(dataToSend);
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  },
};
module.exports = bookController;
