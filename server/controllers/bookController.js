const Book = require("../models/book");

const bookController = {
  addBook: async (req, res) => {
    const maxId = await Book.findOne({}, { ID: 1 })
      .sort({ ID: -1 })
      .limit(1)
      .exec();
    try {
      const data = req.body;
      const newBook = new Book({
        ID: maxId.ID + 1,
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
    } catch (err) {
      // Handle errors
      res.status(500).json({
        message: err.message,
      });
    }
  },
  getRatingBook: async (req, res) => {
    try {
      const users = await Book.find();
      const data = users.map((item) => item.Rating);
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  },
  getGenreBook: async (req, res) => {
    try {
      const users = await Book.find();
      const data = users.map((item) => item.Genre);
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  },

  searchBook: async (req, res) => {
    const query = req.params.query;

    try {
      const regex = new RegExp(query, "i");
      const books = await Book.find({ Tittle: { $regex: regex } })
        .sort({ Tittle: -1 })
        .limit(10);
      res.status(200).json(books);
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  },
  editBook: async (req, res) => {
    try {
      const data = req.body;
      const maxId = await User.findOne({}, { ID: 1 })
        .sort({ ID: -1 })
        .limit(1)
        .exec();
      const result = await Book.updateOne(
        { ID: maxId.ID },
        {
          $set: {
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
  getBookById: async (req, res) => {
    try {
      const bookId = req.params.id;
      console.log(bookId);
      const book = await Book.findOne({ _id: bookId });
      if (!book) {
        return res.status(404).json({
          message: "Book not found",
        });
      }
      res.status(200).json({
        message: "Success",
        data: book,
      });
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  },
  getallBookManage: async (req, res) => {
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

  getAllBooks: async (req, res) => {
    try {
      const { page = 1, pageSize = 12 } = req.query;
      const pageNumber = parseInt(page);
      const pageSizeNumber = parseInt(pageSize);
      // Calculate the number of documents to skip based on the page number and page size.
      const skipDocuments = pageSizeNumber * (pageNumber - 1);
      // Fetch books with pagination from the database.
      const totalBooks = await Book.countDocuments();
      const totalPages = Math.ceil(totalBooks / pageSizeNumber);
      const books = await Book.find().skip(skipDocuments).limit(pageSizeNumber);
      // Generate an array of page numbers [1, 2, 3, ...]
      const pageNumbersArray = Array.from(
        { length: totalPages },
        (_, i) => i + 1
      );
      res.status(200).json({
        books,
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
  getTopBooks: async (req, res) => {
    try {
      const users = await Book.find({ Rating: { $gte: 4.5 } }).limit(10);
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
    } catch (err) {
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
      const regex = new RegExp(name, "i");
      const foundBooks = await Book.find({ Tittle: { $regex: regex } });
      res.json(foundBooks);
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  },
};
module.exports = bookController;