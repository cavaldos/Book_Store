import React from "react";
import { Spin, Alert, Result, Button } from "antd";
import { useNavigate } from "react-router-dom";

const OrderConfirmation = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Result
        status="success"
        title="Payment success !"
        subTitle="We are working diligently to deliver your order to you as soon as possible"
        extra={[
          <Button
            type="primary"
            key="console"
            onClick={() => {
              navigate("/");
            }}
          >
            Keep Shopping
          </Button>,
        ]}
      />
    </div>
  );
};
export default OrderConfirmation;
