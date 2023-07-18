const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();



async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URL_LOCAL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    console.log("Connected to MongoDB ", process.env.MONGODB_URL_LOCAL);
  } catch (err) {
    console.log("connect false \n", err);
  }
}
module.exports = { connect };

