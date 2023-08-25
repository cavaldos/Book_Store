import { connectWebSocket, sendMessage } from "../websocket";
import React, { useEffect, useState } from "react";
import { Steps } from "antd";
import { on } from "events";
const { Step } = Steps;

function Chat() {
  const YOUR_CLIENT_ID = "employee";
  const RECEIVER_ID = "user";
  const [socket, setSocket] = useState(null);
  const [receivedMessages, setReceivedMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  useEffect(() => {
    const newSocket = connectWebSocket(
      YOUR_CLIENT_ID,
      RECEIVER_ID,
      "onMessageReceived"
    );
    setSocket(newSocket);
    // Clean up WebSocket connection on component unmount
    return () => {
      if (newSocket) {
        newSocket.close();
      }
    };
  }, []);

  const onMessageReceived = (message) => {
    setReceivedMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <>
      <button onClick={() => {
        onMessageReceived("sdfg");
      }}>dgsdfg</button>
    </>
  );
}

export default Chat;
