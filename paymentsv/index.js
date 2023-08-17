const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
<<<<<<< HEAD


const PORT = 4000;
const bodyParser = require("body-parser");
app.use(bodyParser.json());

=======
const bodyParser = require("body-parser");
const MongoDB = require("./config/connect");

const allRouter = require("./routes");
const PORT = process.env.PORT || 5000;
MongoDB.connect();
app.use(bodyParser.json());
>>>>>>> origin/khanh
app.use(express.json());
dotenv.config();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));

<<<<<<< HEAD
//ROUTES


const payment_server = app.listen(PORT, () => {
    console.log(`Server payment is running on port : ${PORT}`);
});



=======
app.use(allRouter);

const payment_server = app.listen(PORT, () => {
  console.log(`Server payment is running on port : ${PORT}`);
});
>>>>>>> origin/khanh
