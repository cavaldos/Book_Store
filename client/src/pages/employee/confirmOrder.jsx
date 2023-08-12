import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import CardOrder from "./order/Confirm";
import { LoadingOutlined, SolutionOutlined } from "@ant-design/icons";
import { Steps, Button, message, Space } from "antd";
import { connectWebSocket, sendMessage } from "../../utils/websocket";
function ConfirmOrderEmployee() {
  const YOUR_CLIENT_ID = "employee";
  const RECEIVER_ID = "user";
  const [socket, setSocket] = useState(null);
  const [receivedMessages, setReceivedMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  useEffect(() => {
    const newSocket = connectWebSocket(
      YOUR_CLIENT_ID,
      RECEIVER_ID,
      onMessageReceived
    );
    setSocket(newSocket);
    return () => {
      if (newSocket) {
        newSocket.close();
      }
    };
  }, []);

  async function onMessageReceived  (message)  {
     await setReceivedMessages((prevMessages) => [...prevMessages, message]);
     await setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  const [getAllOrder, setGetAllOrder] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:8001/getallorder")
      .then((res) => {
        const filteredData = res.data.filter((order) => order.state === 2);
        setGetAllOrder(filteredData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>All Order Request </h1>
      <Space
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {getAllOrder.length === 0 ? (
          <p>No orders requested</p>
        ) : (
          getAllOrder.map((order) => (
            <CardOrder key={order.order_code} orderid={order.order_code} />
          ))
        )}
      </Space>
    </>
  );
}

export default ConfirmOrderEmployee;
