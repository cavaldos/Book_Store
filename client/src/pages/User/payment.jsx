import React, { useState, useEffect, useRef } from "react";
import { Steps } from "antd";
import axios from "axios";
import { LoadingOutlined, SolutionOutlined } from "@ant-design/icons";
import CopyText from "./myorder/copytext";
import "./user.scss";
import ConfirmOrder from "./statepayment/1confirmOrder";
import PaymentDetails from "./statepayment/2paymentDetail";
import OrderConfirmation from "./statepayment/3orderConfirmation";
import InTransit from "./statepayment/4inTransit";

import { useSelector, useDispatch } from "react-redux";
import {
  createPayment,
  updateCurrentStep,
} from "../../redux/features/paymentSlice";

const { Step } = Steps;

const Payment = () => {
  const payment = useSelector((state) => state.payment);

  const currentStep = payment.currentStep;
  console.log("currentStep", currentStep);

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
      <div style={{ overflowX: "auto" }}>
        <div
          className="payment"
          style={{ display: "flex", alignItems: "center", margin: "10px" }}
        >
          <h1 style={{ marginRight: "16px" }}></h1>
          <CopyText text={payment.id_payment} />
        </div>
        <Steps
          style={{
            margin: "0 20px",
            width: "80%",
            textAlign: "center",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
          className="steps"
          current={currentStep}
          items={items}
        />
        <div style={contentStyle}>{steps[currentStep].content}</div>
        <div style={{ marginTop: "24px" }}></div>
      </div>
    </>
  );
};

export default Payment;
