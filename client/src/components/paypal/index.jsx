import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";

const PayPalButton = (props) => {
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: 9,
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      // Send details to the server backend to confirm the payment
      axios
        .post(`${process.env.REACT_APP_API_PORT}/paypal/capture`, {
          orderID: data.orderID,
          details,
        })
        .then((response) => {
          // Handle the response from the server if needed
          console.log("Payment captured:", response.data);
        })
        .catch((error) => {
          // Handle any error that occurred during the request
          console.error("Error capturing payment:", error);
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