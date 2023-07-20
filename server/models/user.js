const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    // required: true,
    minlength: 1,
    maxlength: 25,
    unique: true,
  },
  username: {
    type: String,
    // required: true,
    minlength: 1,
    maxlength: 25,
    default: null,
  },
  password: {
    type: String,
    // required: true,
    minlength: 1,
    maxlength: 1024,
  },
  email: {
    type: String,
    // required: true,
    minlength: 10,
    maxlength: 50,
    unique: true,
  },
  firstname: {
    type: String,
    required: false,
    minlength: 1,
    maxlength: 25,
  },
  lastname: {
    type: String,
    required: false,
    minlength: 1,
    maxlength: 25,
  },
  phonenumber: {
    type: String,
    required: false,
    minlength: 10,
    maxlength: 10,
    default: null,
    //   unique: true,
  },
  role: {
    type: String,
    required: false,
    enum: ["user", "admin", "employee"],
    default: "user",
  },
  confirmationCode: {
    type: String,
    required: false,
  },
  wallet: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Wallet",
    },
  ],
});

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

let Wallet = mongoose.model("Wallet", walletSchema);

let User = mongoose.model("User", userSchema);

module.exports = { User, Wallet };
