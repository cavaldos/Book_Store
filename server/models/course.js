const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const courseSchema = new Schema({
  name: {
    type: String,
    maxLength: 255,
    minLength: 3,
  },
  description: {
    type: String,
    maxLength: 255,

    minLength: 1,
  },
  image: {
    type: String,
    minLength: 1,
    maxLength: 255,
  },

});

module.exports = mongoose.model("Course", courseSchema);
