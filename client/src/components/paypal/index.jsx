import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
import { message } from "antd";

const PayPalButton = (props) => {
  console.log("propskhanh", process.env.REACT_APP_API_CLIENT_ID_PAYPAL);
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

  async function onApprove(data, actions) {
    return actions.order.capture().then((details) => {
      // Send details to the server backend to confirm the payment
      console.log("detailsdfsdafsds", props);
      axios
        .post(`${process.env.REACT_APP_API_PORT}/paypal/capture`, {
          orderID: data.orderID,
          details,
          ...props,
        })
        .then((response) => {
          // Handle the response from the server if needed
          console.log("Payment captured:", response.data);
          message.success("Payment captured");
        })
        .catch((error) => {
          // Handle any error that occurred during the request
          console.error("Error capturing payment:", error);
          message.error("Error capturing payment");
        });
    });
  }

  return (
    <PayPalScriptProvider
      options={{
        "client-id": process.env.REACT_APP_API_CLIENT_ID_PAYPAL,
      }}
    >
      <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
