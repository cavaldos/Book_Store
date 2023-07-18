const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const MongoDB = require("./config/connectdb");
const morgan = require("morgan");
const authRoutes = require("./routes/auth");
const route = require("./routes/");
app.use(morgan("tiny"));

route(app);

MongoDB.connect();
app.use(express.json());

//listen
app.listen(process.env.PORT, () => {
  console.log("Server is running on port", process.env.PORT);
});
