import { useState } from "react";
import { Button, message } from "antd";
import { CopyOutlined } from "@ant-design/icons";

function CopyText(props) {
  const { text } = props;
  const [copied, setCopied] = useState(false);

  const handleCopyClick = (event) => {
    event.preventDefault();

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);

      setTimeout(() => setCopied(false), 500); // Reset copied state after 3 seconds
      message.success("Copied to clipboard");
    });
  };

  const maskedText = `${text.slice(0, -3)}***`;

  return (
    <div
      style={{ display: "flex", alignItems: "center", margin: "10px 0 0 0" }}
    >
      <h5 style={{ margin: "10px 0px 0px 20px" }}>Order ID:</h5>
      <Button
        onClick={handleCopyClick}
        type="dashed"
        size="text"
        style={{ marginLeft: 16 }}
      >
        {copied ? `Copied!` : `${maskedText}`}
        <CopyOutlined />
      </Button>
    </div>
  );
}

export default CopyText;
