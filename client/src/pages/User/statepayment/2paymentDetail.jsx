import React from "react";
import { message, Space, Card } from "antd";
import { Button, TextField } from "@mui/material";
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
import PayPalButton from "../../../components/paypal";

const { Step } = Steps;

export const fetchOrder = () => async (dispatch) => {};

const PaymentDetails = () => {
  const user = useSelector((state) => state.user);
  const YOUR_CLIENT_ID = user.email;
  const RECEIVER_ID = "employee";
  const [socket, setSocket] = useState(null);
  const [receivedMessages, setReceivedMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [address, setAddress] = useState("");
  const [cvv, setCvv] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const payment = useSelector((state) => state.payment);
  const [datas, setDatas] = useState([]);
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
  const onMessageReceived = (message) => {
    setReceivedMessages((prevMessages) => [...prevMessages, message]);
  };
  const handleSendMessage = () => {
    sendMessage(socket, YOUR_CLIENT_ID, RECEIVER_ID, inputMessage);
    setInputMessage("");
  };

  //////////////////////////////

  const currentStep = payment.currentStep;

  const data = {
    id_order: payment.id_payment,
    order_volume: payment.orderDetails,
    email: user.email,
    price_total: payment.total,
    state: 2,
  };

  async function handlePayment() {
    console.log("paymentasdfafsd", payment.orderDetails);

    await axios
      .post(`${process.env.REACT_APP_API_PORT}/createorder`, {
        id_order: payment.id_payment,
        order_volume: payment.orderDetails,
        address: address,
        price_total: payment.total,
        state: 2,
      })
      .then((res) => {
        console.log("res", res);
        if (res.data === "success") {
          message.success("Order success");
          dispatch(resetOrder());
          dispatch(resetPayment());
          dispatch(updateCurrentStep({ currentStep: currentStep + 1 }));

          return;
        } else if (res.data === "fail") {
          message.error("Order fail");
        }
      })
      .catch((err) => {
        message.error("Order fail");
        console.log("err", err);
      });

    handleSendMessage();
  }
  const handlePrev = () => {
    dispatch(updateCurrentStep({ currentStep: currentStep - 1 }));
  };
  return (
    <div>
      <div>
        <Space
          style={{
            minHeight: "200px",
            minWidth: "200px",
            backgroundColor: "#f5f5f5",
            borderRadius: "5px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            margin: "0 100px",
          }}
        >
          <Card
            title="Bill your order"
            bordered={false}
            style={{
              minWidth: 300,
              margin: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            {" "}
            <h3 className="h3">Full name: {user.username}</h3>
            <br />
            <h3 className="h3">ID Card: {user.id_card}</h3>
            <br />
            <h3 className="h3">Account balance: {user.id_card}</h3>
            <br />
            <h3 className="h3">Order price: ${payment.total}</h3>
            <br />
            <h3
              styles={{
                display: "flex",
                float: "left",
                position: "relative",
                left: "0",
                padding: "100%",
                backgroundColor: "red",
                color: "red",
              }}
              className="h3"
            ></h3>
          </Card>
          <div style={{ display: "flex", flexDirection: "column" }}></div>
        </Space>
        <div
          style={{
            margin: "5px auto",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            textAlign: "center",
          }}
        >
          <PayPalButton props={data} />
        </div>
        <Button
          variant="outlined"
          style={{ margin: " 8px 0 0 0" }}
          onClick={handlePrev}
        >
          Previous
        </Button>
      </div>
    </div>
  );
};
export default PaymentDetails;
