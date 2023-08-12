const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");


const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(express.json());
dotenv.config();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));

//ROUTES


const payment_server = app.listen(PORT, () => {
    console.log(`Server payment is running on port : ${PORT}`);
});







