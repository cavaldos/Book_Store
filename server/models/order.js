const mongoose = require("mongoose");
const Book = require("./book");

const orderSchema = new mongoose.Schema({
  order_code: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 100,
    unique: true,
  },
  order_volume: {
    type: [
      {
        id_book: {
          type: Number,
          ref: "Book",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
        _id: false,
      },
    ],
    required: true,
  },
  address: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 100,
  },
  price_total: {
    type: Number,
    required: true,
    minlength: 1,
    maxlength: 100,
  },
  state: {
    type: Number,
    required: true,
    minlength: 1,
    maxlength: 100,
    default: 0,
  },
  date: {
    type: Date,
    required: true,
    minlength: 1,
    maxlength: 100,
    //format: "DD/MM/YYYY",
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);

/*
const mongoose = require("mongoose");
const Book = require("./book");

const orderSchema = new mongoose.Schema({
  order_code: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 100,
    unique: true,
  },
  volume_order: {
    type: [
      {
        book: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Book",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
      },
    ],
    required: true,
    validate: {
      validator: function (v) {
        return v.length > 0;
      },
      message: "Volume order must contain at least one item",
    },
  },
  address: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 100,
  },
  price_total: {
    type: Number,
    required: true,
    min: 0,
  },
  state: {
    type: Number,
    required: true,
    min: 0,
    max: 3,
    default: 0,
  },
});

module.exports = mongoose.model("Order", orderSchema);


*/
