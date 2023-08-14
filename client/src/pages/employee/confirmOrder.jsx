import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import CardOrder from "./order/Confirm";
import { LoadingOutlined, SolutionOutlined } from "@ant-design/icons";
import { Steps, Button, message, Space } from "antd";

function ConfirmOrderEmployee() {
  const [getAllOrder, setGetAllOrder] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8001/getallorder")
      .then((res) => {
        const filteredData = res.data.filter((order) => order.state === 2);
        setGetAllOrder(filteredData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log("getAllOrder", getAllOrder);

  return (
    <>
      <h1>All Order Request </h1>
      <Space
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {getAllOrder.length === 0 ? (
          <p>No orders requested</p>
        ) : (
          getAllOrder.map((order) => (
            <CardOrder key={order.order_code} orderid={order.order_code} />
          ))
        )}
      </Space>
    </>
  );
}

export default ConfirmOrderEmployee;
