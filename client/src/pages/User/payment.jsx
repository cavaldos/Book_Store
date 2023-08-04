import React, { useState, useEffect, useRef } from "react";
import { Steps } from "antd";
import axios from "axios";
import { LoadingOutlined, SolutionOutlined } from "@ant-design/icons";

import "./user.scss";
import {
  ConfirmOrder,
  PaymentDetails,
  OrderConfirmation,
  InTransit,
} from "./statepayment";
import { useSelector, useDispatch } from "react-redux";
import {
  createPayment,
  updateCurrentStep,
} from "../../redux/features/paymentSlice";

const { Step } = Steps;

const Payment = () => {
  const [getAllOrder, setGetAllOrder] = useState([]);
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order);
  const payment = useSelector((state) => state.payment);

  // console.log("order", order);
  // console.log("payment", payment);

  const currentStep = payment.currentStep;
  console.log("currentStep", currentStep);

  useEffect(() => {
    axios
      .get("http://localhost:8001/getallorder")
      .then((res) => {
        setGetAllOrder(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log("getAllOrder", getAllOrder);
  // console.log("getAllOrder", getAllOrder[0]);

 
  const steps = [
    {
      title: "Confirm Order",
      content: <ConfirmOrder />,
      description: "This is a description.",
      key: "confirm",
    },
    {
      title: "Payment Details",
      content: <PaymentDetails />,
      icon: <SolutionOutlined />,
      key: "payment",
    },
    {
      title: "Order Confirmation",
      content: <OrderConfirmation />,
      icon: <LoadingOutlined />,
      key: "order",
    },
    {
      title: "In Transit",

      content: <InTransit />,
      // icon: <LoadingOutlined />,
      key: "transit",
    },
  ];
  const items = steps.map((item) => ({
    key: item.key,
    title: item.title,
  }));

  const contentStyle = {
    lineHeight: "260px",
    textAlign: "center",
    marginTop: 16,
  };
  return (
    <>
      <div className="payment">
        <p>id{payment.id_payment}</p>
        <h1>My order</h1>
        <Steps className="steps" current={currentStep} items={items} />

        <div style={contentStyle}>{steps[currentStep].content}</div>

        <div style={{ marginTop: "24px" }}>
         
        </div>
      </div>
    </>
  );
};

export default Payment;
