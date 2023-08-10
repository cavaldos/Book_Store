import React from "react";
import { Button, Spin, Alert } from "antd";

function LoadingError(props) {
  const { error, retry } = props;

  if (error) {
    return (
      <div style={{ textAlign: "center" }}>
        <Alert
          message="Error"
          description={error.message}
          type="error"
          showIcon
        />
        <Button onClick={retry}>Retry</Button>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center" }}>
      <Spin style={{ position: "absolute", top: "30vh" }} size="large" />
    </div>
  );
}

export default LoadingError;
