import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPalButton = () => {
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: 100,
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      // Gửi details lên server backend để xác nhận thanh toán
      fetch(`${process.env.REACT_APP_API_PORT}/paypal/capture`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderID: data.orderID,
          details,
        }),
      });
    });
  };

  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "ARF0pHipAONXG7QsSM6RJ-nOr58xelyRzLltsZMjJzc-bj-9CPPMiJvdCN9TygequiImpNATqBKL6JTj",
      }}
    >
      <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
