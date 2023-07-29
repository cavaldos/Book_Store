const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  photoUrl: String,
});

const Avatar = mongoose.model("Avatar", userSchema);
module.exports = Avatar;