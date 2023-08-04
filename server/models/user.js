const mongoose = require("mongoose");
const Notification = require("./notification");
const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    minlength: 1,
    maxlength: 25,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 25,
    default: null,
  },
  password: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 1024,
  },
  email: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 50,
    unique: true,
  },
  firstname: {
    type: String,
    required: false,
    minlength: 1,
    maxlength: 25,
    default: "...",
  },
  lastname: {
    type: String,
    required: false,
    minlength: 1,
    maxlength: 25,
    default: "...",
  },
  phonenumber: {
    type: String,
    required: false,
    minlength: 1,
    maxlength: 20,
    default: "84+",
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
  id_card: {
    type: String,
    required: false,
    unique: true,
    minlength: 9,
    maxlength: 12,
    default: null,
  },
  account_balance: {
    type: Number,
    required: false,
    default: 0,
  },
  id_oder: {
    type: [String], 
    required: false,
    default: ["..."],
    unique: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
