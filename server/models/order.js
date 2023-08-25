const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  id_order: {
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
    enum: [0, 1, 2, 3],
  },
  date: {
    type: Date,
    required: true,
    minlength: 1,
    maxlength: 100,
    default: Date.now,
  },
  address: {
    type: String,
    required: false,
    minlength: 1,
    maxlength: 100,
  },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
