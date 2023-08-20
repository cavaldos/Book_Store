import React from "react";
import { Table, Space } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { updateCurrentStep } from "../../../redux/features/paymentSlice";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ConfirmOrder = () => {
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Price $",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
  ];
  const order = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const payment = useSelector((state) => state.payment);
  console.log("payment", payment);
  const currentStep = payment.currentStep;
  const handleNext = () => {
    dispatch(updateCurrentStep({ currentStep: currentStep + 1 }));
  };

  // console.log("orderk", order);
  const { title, price, quantity } = order;
  return (
    <>
      <div style={{ overflowX: "auto" }}>
        <div>
          <Table
            style={{ margin: "0 20px" }}
            columns={columns}
            key={columns.key}
            dataSource={payment.orderDetails}
            rowKey={(record) => record.id} // add a unique key prop to each row
            pagination={{ pageSize: 10 }}
          />

          <h2
            style={{
              borderRadius: "5px",

              height: "60px",
              minWidth: "150px",

              width: "auto",
              position: "relative",
              lineHeight: "60px",
            }}
          >
            Total: $ {payment.total}
          </h2>

          <Button
            variant="contained"
            style={{
              margin: "0 8px",
              width: "100px",
              height: "45px",
              position: "relative",
              top: "-100px",
            }}
            onClick={handleNext}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
};
export default ConfirmOrder;
