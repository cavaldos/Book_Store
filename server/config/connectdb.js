const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const URL = process.env.MONGODB_URL1;
async function connect() {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connect successfully", ":<<", URL, ">>");
  } catch (err) {
    console.log("connect false \n", err);
  }
}
module.exports = { connect };
