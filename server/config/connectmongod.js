
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

mongoose
    .connect(process.env.MONGODB_URL1)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('connect false \n', err));

module.exports = mongoose;

