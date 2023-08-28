const Book = require("../models/book");

const bookController = {
  addBook: async (req, res) => {
    nbooks = await Book.countDocuments({}).exec();
    const maxId = await Book.findOne({}, { ID: 1 })
      .sort({ ID: -1 })
      .limit(1)
      .exec();
    
    try {
      const findDup = await Book.findOne({}, { Tittle: req.body.Tittle })
      if (findDup.length >= 1){
        return res.status(409).json({
          message: "Book already exists"
        })
      }
      const data = req.body;
      const newBook = new Book({
        ID: nbooks + 1,
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
      if (books.length === 0) {
        res.status(404).json({
          message: "No books found",
        })
      } else {
        res.status(200).json(books);
      }
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
  importBook: async (req, res) => {
    try {
      const data = req.body;
      const exbook = await User.findOne({data})
      const result = await Book.updateOne(
        { Tittle: exbook.title },
        {
          $set: {
            quantity: exbook.quantity + data.quantity,
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
      const { page = 1, pageSize = 12, genre = 'All' } = req.query;
      const pageNumber = parseInt(page);
      const pageSizeNumber = parseInt(pageSize);
      
      let query = {};
  
      if (genre !== 'All') {
        query.Genre = genre;
      }
  
      const skipDocuments = pageSizeNumber * (pageNumber - 1);
      const totalBooks = await Book.countDocuments(query);
      const totalPages = Math.ceil(totalBooks / pageSizeNumber);
      
      const books = await Book.find(query).skip(skipDocuments).limit(pageSizeNumber);
      
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
  deleteAllBooksWith: async (req, res) => {
    try {
      const data = req.body;
      const users = await Book.deleteMany({ data });
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
