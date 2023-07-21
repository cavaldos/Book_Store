const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const MongoDB = require("./config/connectdb");
const morgan = require("morgan");

app.use(morgan("tiny"));
const allRouter = require("./routes");

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
});
//ROUTES
app.use("/auth",allRouter);

MongoDB.connect();
app.use(express.json());
//listen
app.listen(process.env.PORT, () => {
  console.log("Server is running on port", process.env.PORT);
});
