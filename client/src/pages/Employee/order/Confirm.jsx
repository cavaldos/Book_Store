import React, { useState } from "react";
import { Card, Space, Button } from "antd";
import Copytext from "../../User/myorder/copytext";
import { Spa } from "@mui/icons-material";

const CardConfirmOrder = (props) => {
  console.log(props);

  return (
    <>
      <Space
        style={{
          backgroundColor: "#f0f2f5",
          minHeight: "100px",
          minWidth: "500px",
          borderRadius: "10px",
          border: "1px solid #d9d9d9",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          padding: "0 0 10px 0",
        }}
        align="center"
      >
        <Copytext text={`${props.orderid}`} />
        <Space
          style={{
            display: "flex",
            minHeight: "100px",
            minWidth: "500px",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          contern
        </Space>
        <Button style={{ float: "right" }} type="primary">
          Primary Button
        </Button>
      </Space>

      <br />
    </>
  );
};
export default CardConfirmOrder;
