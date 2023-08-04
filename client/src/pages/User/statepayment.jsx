import React from "react";
import { Steps } from "antd";

const { Step } = Steps;

const ConfirmOrder = () => {
  return (
    <div>
      <h2>Confirm Orderl</h2>
      <p>  hien thi don dan </p>
    </div>
  );
};

const PaymentDetails = () => {
  return (
    <div>
      <h2>Payment Details</h2>
      <p> xacs nhan xanhtoans </p>
    </div>
  );
};

const OrderConfirmation = () => {
  return (
    <div>
      <h2>Order Confirmation</h2>
      <p> cho user xac nhan down hang</p>
    </div>
  );
};

const InTransit = () => {
  return (
    <div>
      <h2>In Transit</h2>
      <p> don hang dang duoc giao toi ban </p>

    </div>
  );
};

export { ConfirmOrder, PaymentDetails, OrderConfirmation, InTransit };
