import React, { useState } from "react";
import { Steps, Button } from "antd";
import { createPayment } from "../../redux/features/paymentSlice";
import {
  ConfirmOrder,
  PaymentDetails,
  OrderConfirmation,
  InTransit,
} from "./statepayment";
import { useSelector, useDispatch } from "react-redux";
const { Step } = Steps;

const Payment = () => {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order);
  const payment = useSelector((state) => state.payment);
  console.log("order", order);
  console.log("payment", payment);

  const handleNexts = () => {
    dispatch(createPayment({ orderDetails: order }));
  };
  const currentStep = payment.currentStep;
  const handleNext = () => {
    dispatch(createPayment({ currentStep: currentStep + 1 }));
  };
  const handlePrev = () => {
    dispatch(createPayment({ currentStep: currentStep - 1 }));
  };
  const steps = [
    {
      title: "Confirm Order",
      content: <ConfirmOrder />,
      description: "This is a description.",
    },
    {
      title: "Payment Details",
      content: <PaymentDetails />,
    },
    {
      title: "Order Confirmation",
      content: <OrderConfirmation />,
    },
    {
      title: "In Transit",
      content: <InTransit />,
    },
  ];
  return (
    <>
      <button onClick={handleNexts}>update</button>
      <div>
        <Steps current={currentStep} items={steps} />
        {currentStep === 0 && <ConfirmOrder />}
        {currentStep === 1 && <PaymentDetails />}
        {currentStep === 2 && <OrderConfirmation />}
        {currentStep === 3 && <InTransit />}
        <div style={{ marginTop: "24px" }}>
          {currentStep > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={handlePrev}>
              Previous
            </Button>
          )}
          {currentStep < 3 ? (
            <Button type="primary" onClick={handleNext}>
              Next
            </Button>
          ) : (
            <Button type="primary" disabled>
              Finish
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Payment;
