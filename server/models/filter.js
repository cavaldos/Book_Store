const mongoose = require('mongoose');
const filterSchema = new mongoose.Schema({
  ID: {
    type: Number,
    required: true,
    unique: true,
    minlength: 1,
    maxlength: 25,
  },
  Genre: {
    type: String,
    required: false,
  },
  Rate: {
    type: Number,
    required: false,
  },
  Price: {
    type: String,
    required: false,
  }
});
const Filter = mongoose.model('Filter', filterSchema);
module.exports = Filter;