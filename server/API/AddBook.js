///Kết nối
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/Book', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(error => console.error(error));

const app = express();

app.use(bodyParser.json());
app.use(cors());


///Schema cho book
const mySchema = new mongoose.Schema({
    ID: Number,
    bookTitle:
    {
      type: String,
      required: true
    },
    Author:
    {
      type: String,
      required: true
    },
    publicationYear:
    {
      type: Number,
      required: true
    },
    Genre:
      {
        type: String,
        required: true
      },
    ISBN: String,
    Publisher: 
      {
        type: String,
        required: true
      },
    Description: String,
    Price:
    {
      type: String,
      required: true
    },
    Number: Number,
  });
const MyModel = mongoose.model('MyModel', mySchema, 'b2');
  


//// Gửi yêu cầu thêm sách
app.post('/api/book', (req, res) => {
  const data = req.body;
  const newBook = new MyModel({
    ID: data.ID,
    bookTitle: data.bookTitle,
    Author: data.Author,
    publicationYear: data.publicationYear,
    Genre: data.Genre,
    ISBN: data.ISBN,
    Publisher: data.Publisher ,
    Description: data.Description,
    Price: data.Price,
    Number: data.Number,
  });

  ///Tạo sách mới vào database
  MyModel.create(newBook)
    .then((b2) => 
      {
        console.log(b2);
        res.send('Gửi dữ liệu thành công')
      })
      .catch((err) => 
      {
        console.error(err);
      }
        );
});

////Start server
app.listen(3000, () => console.log('Server started on port 3000'));