import React from "react";
import { Steps } from "antd";

const { Step } = Steps;

const ConfirmOrder = () => {
  return (
    <div>
      <h2>Confirm Orderl</h2>
      {/* Thêm các trường thông tin đơn hàng cần xác nhận */}
      <p> Thêm các trường thông tin đơn hàng cần xác nhận </p>
    </div>
  );
};

const PaymentDetails = () => {
  return (
    <div>
      <h2>Payment Details</h2>
      <p> Thêm các trường thông tin đơn hàng cần xác nhận </p>
    </div>
  );
};

const OrderConfirmation = () => {
  return (
    <div>
      <h2>Order Confirmation</h2>
      <p> Thêm các trường thông tin đơn hàng cần xác nhận </p>
    </div>
  );
};

const InTransit = () => {
  return (
    <div>
      <h2>In Transit</h2>
      <p> Thêm các trường thông tin đơn hàng cần xác nhận </p>

    </div>
  );
};

export { ConfirmOrder, PaymentDetails, OrderConfirmation, InTransit };
