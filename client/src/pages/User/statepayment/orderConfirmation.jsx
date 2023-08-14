import React from "react";
import { Spin, Alert } from "antd";

const OrderConfirmation = () => {
  return (
    <div>
      <Spin tip="Loading...">
        <Alert
          style={{ margin: "0 100px 0 100px" }}
          message="Alert message title"
          description="Further details about the context of this alert."
          type="info"
        />
      </Spin>
      <h2>Order Confirmation</h2>
    </div>
  );
};
export default OrderConfirmation;