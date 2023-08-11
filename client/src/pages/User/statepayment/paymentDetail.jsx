import React from "react";
import { Button, message, Space } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { updateCurrentStep } from "../../../redux/features/paymentSlice";
import { resetOrder } from "../../../redux/features/orderSlice";
import {
  resetPayment,
  createPayment,
} from "../../../redux/features/paymentSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { connectWebSocket, sendMessage } from "../../../utils/websocket";
import { useEffect, useState } from "react";
import { Steps } from "antd";
const { Step } = Steps;

export const fetchOrder = () => async (dispatch) => {};

const PaymentDetails = () => {
  const YOUR_CLIENT_ID = "admin";
  const RECEIVER_ID = "user";
  const [socket, setSocket] = useState(null);
  const [receivedMessages, setReceivedMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  // useEffect(() => {
  //   const newSocket = connectWebSocket(
  //     YOUR_CLIENT_ID,
  //     RECEIVER_ID,
  //     onMessageReceived
  //   );
  //   setSocket(newSocket);
  //   //Làm sạch kết nối WebSocket trên thành phần không ngừng
  //   return () => {
  //     if (newSocket) {
  //       newSocket.close();
  //     }
  //   };
  // }, []);
  //  const onMessageReceived = (message) => {
  //    setReceivedMessages((prevMessages) => [...prevMessages, message]);
  //  };
  //  const handleSendMessage = () => {
  //    sendMessage(socket, YOUR_CLIENT_ID, RECEIVER_ID, inputMessage);
  //    setInputMessage(5);
  //  };
  ////////////////////////////////
  const navigate = useNavigate();
  //http://localhost:8001/createorder
  //luu don hang
  const dispatch = useDispatch();
  const payment = useSelector((state) => state.payment);
  const currentStep = payment.currentStep;
  console.log("detail", payment.orderDetails);
  async function handlePayment() {
    // await axios
    //   .post("http://localhost:8001/createorder", {
    //     state: 2,
    //     address: "hcm",
    //     price_total: payment.total,
    //     order_code: payment.id_payment,
    //     order_volume: payment.orderDetails,
    //   })
    //   .then((res) => {
    //     if (res.data === "success") {
    //       message.success("Processing complete!");
    //     } else {
    //       message.error("Processing fail!");
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    dispatch(updateCurrentStep({ currentStep: currentStep + 1 }));
  }
  const handlePrev = () => {
    dispatch(updateCurrentStep({ currentStep: currentStep - 1 }));
  };
  return (
    <div>
      {/* <h2>Payment Details
      <button onClick={handleSendMessage}>Send</button>
      </h2> */}
      <Space
        style={{
          minHeight: "200px",
          minWidth: "200px",
          backgroundColor: "aqua",
          position: "relative",
        }}
      >
        mai lam phan xac nhan thanh toan tai day
      </Space>
      <br />
      <Button style={{ margin: "0 8px" }} onClick={handlePrev}>
 
        Previous
      </Button>
      <Button type="primary" onClick={handlePayment}>
        Payment confirmation
      </Button>
    </div>
  );
};
export default PaymentDetails;
