const mongoose = require("mongoose");


const orderSchema = new mongoose.Schema({
  id_order: {
    type: String,
    required: true,
    unique: true,

  },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
