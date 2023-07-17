const mongoose = require('mongoose');




  const mySchema = new mongoose.Schema({
    ID: 
    {
      type: Number,
      required: true
    },
    Image: 
    {
      type: String,
      require: true
    },
    Title:
    {
      type: String,
      required: true
    },
    Author:
    {
      type: String,
      required: true
    },
    Rating: Number,
    Price:
    {
      type: String,
      required: true
    },
    ISBN: String,
    Genre:
      {
        type: String,
        required: true
      },
    Publish_Year:
    {
      type: Number,
      required: true
    },
    Publisher: 
      {
        type: String,
        required: true
      },
    Description: String,
    quantity: Number,
  });

const MyModel = mongoose.model('MyModel', mySchema, 'b2');

module.exports = MyModel;
 