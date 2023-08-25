const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({
  price: {
    type: Number,
  },
  id_order: {
    type: String,
  },
  numberCard: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    default: "success",
  },
  nameUser: {
    type: String,
  },
});

const History = mongoose.model("History", historySchema);
module.exports = History;
