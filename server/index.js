const express = require("express");
//thêm thư viện này vào-------
const fs = require("fs");
const https = require("https");
//-----------------------------
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

//tạo mã xác nhận cho https
const privateKey = fs.readFileSync("./SSL/key.pem");
const certificate = fs.readFileSync("./SSL/cert.pem");
//----------------------------------------------------------------

const credentials = {
  key: privateKey,
  cert: certificate,
};

//gắn https------------------------------
const server = https.createServer(credentials, app);


//listen

// app.listen(process.env.PORT, () => {
//   console.log("Server is running on port", process.env.PORT);
// });
server.listen(process.env.PORT, () => {
  console.log("Server is running on port", process.env.PORT);
});
startWebSocketServer(server);









// const express = require("express");
// const app = express();
// const dotenv = require("dotenv");
// const MongoDB = require("./config/connectdb");
// const cors = require("cors");
// const morgan = require("morgan");
// const allRouter = require("./routes");
// const WebSocket = require("ws");

// const bodyParser = require("body-parser");
// app.use(bodyParser.json());

// app.use(express.json());
// dotenv.config();
// app.use(cors());
// app.use(express.urlencoded({ extended: true }));
// MongoDB.connect();
// app.use(morgan("tiny"));

// //ROUTES
// app.use(allRouter);

// const server = app.listen(process.env.PORT, () => {
//   console.log("Server is running on port", process.env.PORT);
// });

// // WebSocket Server
// const wss = new WebSocket.Server({ server });

// const connections = new Set();

// wss.on("connection", (socket) => {
//   console.log("Client connected");

//   // Thêm kết nối mới vào danh sách
//   connections.add(socket);
//   console.log("Number of connections:", connections.size);

//   socket.on("message", (message) => {
//     const decodedMessage = message.toString();
//     console.log("Received message:", decodedMessage);
//     // Xử lý tin nhắn từ client

//     // Gửi tin nhắn đến tất cả các kết nối khác
//     connections.forEach((connection) => {
//       if (connection !== socket) {
//         connection.send(decodedMessage);
//       }
//     });

//     // Gửi tin nhắn vừa nhận về client gốc
//     socket.send(decodedMessage);
//   });

//   socket.on("close", () => {
//     console.log("Client disconnected");
//     // Xóa kết nối khỏi danh sách
//     connections.delete(socket);
//   });
// });

