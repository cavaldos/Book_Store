import React from "react";
import { Table } from "antd";

import { Steps } from "antd";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
const { Step } = Steps;
///
export const fetchOrder = () => async (dispatch) => {};

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
  console.log("orderk", order);
  const { title, price, quantity } = order;
  return (
    <>
      <div>
        <Table
          // style={{ margin: "0 100px 0 100px" }}
          columns={columns}
          dataSource={order}
          // loading={true}
          // rowKey={(products) => products}
          pagination={{ pageSize: 10 }}
          bordered
        />
      </div>
    </>
  );
};

const PaymentDetails = () => {
  return (
    <div>
      <h2>Payment Details</h2>
      <p> xacs nhan xanhtoans </p>
    </div>
  );
};

const OrderConfirmation = () => {
  return (
    <div>
      <h2>Order Confirmation</h2>
      <p> cho user xac nhan down hang</p>
    </div>
  );
};

const InTransit = () => {
  return (
    <div>
      <h2>In Transit</h2>
      <p> don hang dang duoc giao toi ban </p>
    </div>
  );
};

export { ConfirmOrder, PaymentDetails, OrderConfirmation, InTransit };
