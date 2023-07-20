const express = require("express");
const cors = require("cors");
const app = express();
const authRoutes = require("./routes/authRoutes");
const confirmationRoutes = require("./routes/confirmationRoutes");
const dbConnect = require("./config/connectdb");

dbConnect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/auth", authRoutes);
app.use("/confirmation", confirmationRoutes);

app.listen(8000, () => {
  console.log("port connected");
});