import React from "react";
import { Spin, Button, message } from "antd";

const InTransit = () => {
  return (
    <div>
      <h2>In Transit</h2>
      <Spin />
      <p> don hang dang duoc giao toi ban </p>
      <Button
        type="primary"
        onClick={() => message.success("Processing complete!")}
      >
        Done
      </Button>
    </div>
  );
};

export default InTransit;