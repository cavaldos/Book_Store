const Book = require("../models/book");
const Cart = require("../models/cart");

const bookController = {
  addBook: async (req, res) => {
    try {
    const data = req.body;
    const newBook = new Book({
    ID: data.ID,
    Image: data.Image,
    Tittle: data.Tittle,
    Author: data.Author,
    Rating: data.Rating,
    Price: data.Price,
    ISBN: data.ISBN,
    Genre: data.Genre,
    Publish_Year: data.Publish_Year,
    Publisher: data.Publisher,
    Description: data.Description,
    quantity: data.quantity,
  });
    
      // Save the new Book document to the database
      await newBook.save();
      // Send a response to the client
      res.status(201).json(newBook);
    }
    catch (err) {
      // Handle errors
      res.status(500).json({
        message: err.message,
      });
    }
  },
  // searchBook: async (req, res) => {
  //   try {
  //     const data = req.body;
  //     console.log(data);
  //     const foundBooks = await Book.find(data);
    
  //     res.json(foundBooks);
  //   }
  //   catch (err) {
  //     res.status(500).json({
  //       message: err.message,
  //     });
  //   }
  // },
  
  editBook: async (req, res) => {
    try {
      const data = req.body;
      const result = await Book.updateOne({ID: data.ID}, {$set : {
      ID: data.ID,
      Image: data.Image,
      Tittle: data.Tittle,
      Author: data.Author,
      Rating: data.Rating,
      Price: data.Price,
      ISBN: data.ISBN,
      Genre: data.Genre,
      Publish_Year: data.Publish_Year,
      Publisher: data.Publisher,
      Description: data.Description,
      quantity: data.quantity,}} );
      res.status(200).json(result);
  }
    catch (err) {
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
  getTopBooks: async (req, res) => {
    try {
      const users = await Book.find({Rating: {$gte: 4.5}}).limit(10);
      res.status(200).json(users);
      // res.json(dataToSend);
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  },
  deleteBook: async (req, res) => {
    try {
      const data = req.body;
      const maso = data.ID;
      const users = await Book.deleteOne({ ID: maso });
      res.status(200).json(users);
    }

    catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  },
  findBook: async (req, res) => {
    try {
      const data = req.body;
      const name = data.Tittle;

      // // Use a regular expression to perform a partial match on the book name
      const regex = new RegExp(name, 'i');
      const foundBooks = await Book.find({ Tittle: { $regex: regex } });
      
      res.json(foundBooks);
    }
    catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  },
};
module.exports = bookController;
