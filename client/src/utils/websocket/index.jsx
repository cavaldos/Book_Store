import { w3cwebsocket as WebSocket } from "websocket";

function connectWebSocket(YOUR_CLIENT_ID, RECEIVER_ID, onMessageReceived) {
  const socket = new WebSocket("ws://localhost:8001/");

  socket.onopen = () => {
    console.log("Connected to server");
  };

  socket.onmessage = (message) => {
    const decodedMessage = JSON.parse(message.data);
    console.log("Received message:", decodedMessage);
    onMessageReceived(decodedMessage);
  };

  socket.onclose = () => {
    console.log("Disconnected from server");
  };

  return socket;
}

function sendMessage(socket, YOUR_CLIENT_ID, RECEIVER_ID, content) {
  if (socket && socket.readyState === WebSocket.OPEN) {
    const message = {
      content: content,
      senderId: YOUR_CLIENT_ID,
      receiverId: RECEIVER_ID,
    };
    socket.send(JSON.stringify(message));
    console.log("Sent message:", message);
  }
}

export { connectWebSocket, sendMessage };











// import { w3cwebsocket as WebSocket } from "websocket";

// function createWebSocketClient(YOUR_CLIENT_ID, RECEIVER_ID) {
//   let socket = null;
//   let sendMessage = "";
//   let receivedMessages = [];

//   const connectWebSocket = () => {
//     socket = new WebSocket("ws://localhost:8001/");

//     socket.onopen = () => {
//       console.log("Connected to server");
//     };

//     socket.onmessage = (message) => {
//       const decodedMessage = JSON.parse(message.data);
//       console.log("Received message:", decodedMessage);
//       receivedMessages = [...receivedMessages, decodedMessage];
//     };

//     socket.onclose = () => {
//       console.log("Disconnected from server");
//       socket = null;
//     };
//   };

//   const handleSendMessage = () => {
//     if (socket && socket.readyState === WebSocket.OPEN) {
//       const message = {
//         content: sendMessage,
//         senderId: YOUR_CLIENT_ID, // Replace YOUR_CLIENT_ID with the client's ID
//         receiverId: RECEIVER_ID, // Replace RECEIVER_ID with the receiver's ID
//       };
//       socket.send(JSON.stringify(message));
//       console.log("Sent message:", message);
//       sendMessage = "";
//     }
//   };
//   connectWebSocket();
//   return {
//     sendMessage,
//     receivedMessages,
//     handleSendMessage,
//   };
// }

// module.exports = createWebSocketClient;

