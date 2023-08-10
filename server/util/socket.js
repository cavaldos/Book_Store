// const WebSocket = require("ws");

// function startWebSocketServer() {
//   const server = new WebSocket.Server({ port: process.env.PORT_SOCKET });
//   const connections = new Set();

//   server.on("connection", (socket) => {
//     console.log("Client connected");

//     // Thêm kết nối mới vào danh sách
//     connections.add(socket);
//     console.log("Number of connections:", connections.size);

//     socket.on("message", (message) => {
//       const decodedMessage = message.toString();
//       console.log("Received message:", decodedMessage);
//       // Xử lý tin nhắn từ client

//       // Gửi tin nhắn đến tất cả các kết nối khác
//       connections.forEach((connection) => {
//         if (connection !== socket) {
//           connection.send(decodedMessage);
//         }
//       });

//       // Gửi tin nhắn vừa nhận về client gốc
//       socket.send(decodedMessage);
//     });

//     socket.on("close", () => {
//       console.log("Client disconnected");
//       // Xóa kết nối khỏi danh sách
//       connections.delete(socket);
//     });
//   });
// }

// module.exports = startWebSocketServer;

const WebSocket = require("ws");

function startWebSocketServer(server) {
  const wss = new WebSocket.Server({ server });
  const connections = new Set();
  wss.on("connection", (socket) => {
    console.log("Client connected ");
    connections.add(socket);
    console.log("Number of connections:", connections.size);
    socket.on("message", (message) => {
      const decodedMessage = message.toString();
      const messageObject = JSON.parse(decodedMessage);
      console.log("Received message:", messageObject);
      const { receiverId } = messageObject;
      console.log("ID người nhận: ", receiverId);
      connections.forEach((connection) => {
        connection.id = receiverId;
        if (connection !== socket) {
          // Check if the connection's ID matches the recipient ID
          if (connection.id === receiverId) {
            connection.send(decodedMessage);
          }
        }
      });
      // Gửi tin nhắn vừa nhận về client gốc
      // socket.send(decodedMessage);
    });

    socket.on("close", () => {
      console.log("Client disconnected");
      connections.delete(socket);
    });
  });
}

module.exports = startWebSocketServer;
