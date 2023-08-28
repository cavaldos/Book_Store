const express = require("express");
const fs = require("fs");
const https = require("https");

const app = express();
const dotenv = require("dotenv");
const MongoDB = require("./config/connectdb");
const cors = require("cors");
const morgan = require("morgan");
const allRouter = require("./routes");
const startWebSocketServer = require("./util/socket");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(express.json());
dotenv.config();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
MongoDB.connect();
app.use(morgan("tiny"));

//ROUTES
app.use(allRouter);
const privateKey = fs.readFileSync("./SSL/key.pem");
const certificate = fs.readFileSync("./SSL/cert.pem");
const credentials = {
  key: privateKey,
  cert: certificate,
};

const server = https.createServer(credentials, app);

server.listen(process.env.PORT, () => {
  console.log("Server is running on port", process.env.PORT);
});
startWebSocketServer(server);
// app.listen(process.env.PORT, () => {
//   console.log("Server is running on port", process.env.PORT);
// });
