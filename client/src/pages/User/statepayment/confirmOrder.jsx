import React from "react";
import { Table, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { updateCurrentStep } from "../../../redux/features/paymentSlice";

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
  const currentStep = payment.currentStep;

  const handleNext = () => {
    dispatch(updateCurrentStep({ currentStep: currentStep + 1 }));
  };

  // console.log("orderk", order);
  const { title, price, quantity } = order;
  return (
    <>
      <div>
        mai efit lại đây
        <Table
          columns={columns}
          dataSource={order}
          rowKey={(record) => record.id} // add a unique key prop to each row
          pagination={{ pageSize: 10 }}
        />
        <Button type="primary " onClick={handleNext}>
          Next
        </Button>
      </div>
    </>
  );
};
export default ConfirmOrder;
