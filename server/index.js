const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const MongoDB = require("./config/connectdb");
const morgan = require("morgan");

app.use(morgan("tiny"));
const allRouter = require("./routes/index");

//ROUTES
app.use(allRouter);

MongoDB.connect();
app.use(express.json());
//listen
app.listen(process.env.PORT, () => {
  console.log("Server is running on port", process.env.PORT);
});
