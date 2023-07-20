const mongoose = require("mongoose");
const user = require("./user");


const walletSchema = new mongoose.Schema({
  id_card: {
    type: Number,
    required: true,
    minlength: 5,
    maxlength: 25,
    unique: true,
  },
  account_balance: {
    type: Number,
    required: true,
    minlength: 1,
  },
  info_user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

});

module.exports = mongoose.model("Wallet", walletSchema);
