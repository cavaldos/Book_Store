const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URL2);
  } catch (err) {
    console.log("connect false \n", err);
  }
}
module.exports = { connect };
