const express = require("express");
const app = express();
const dotenv = require("dotenv");
const MongoDB = require("./config/connectdb");
const cors = require("cors");
const morgan = require("morgan");
const allRouter = require("./routes");

app.use(express.json());
dotenv.config();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
MongoDB.connect();
app.use(morgan("tiny"));

//ROUTES
app.use(allRouter);

//listen
app.listen(process.env.PORT, () => {
  console.log("Server is running on port", process.env.PORT);
});
