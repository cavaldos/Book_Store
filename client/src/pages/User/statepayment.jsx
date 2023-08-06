import React from "react";
import { Table } from "antd";

import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Alert, Space, Spin } from "antd";
import { Steps, Button, message } from "antd";
import { resetOrder } from "../../redux/features/orderSlice";

import {
  createPayment,
  updateCurrentStep,
} from "../../redux/features/paymentSlice";
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

const PaymentDetails = () => {
  //http://localhost:8001/createorder
  //luu don hang
  const dispatch = useDispatch();
  const payment = useSelector((state) => state.payment);
  const currentStep = payment.currentStep;
  console.log("detail", payment.orderDetails);
  const handleNext = () => {
    dispatch(updateCurrentStep({ currentStep: currentStep + 1 }));
    axios
      .post("http://localhost:8001/createorder", {
        state: 2,
        address: "hcm",
        price_total: payment.total,
        order_code: payment.id_payment,
        order_volume: payment.orderDetails,
      })
      .then((res) => {
        if(res.data === "success"){
          message.success("Processing complete!");
        }
        else{
          message.error("Processing fail!");
        }

      })
      .catch((err) => {
        console.log(err);
      });
      dispatch(resetOrder());

  };
  const handlePrev = () => {
    dispatch(createPayment({ currentStep: currentStep - 1 }));
  };
  return (
    <div>
      <h2>Payment Details</h2>
      <p> xacs nhan xanhtoans </p>
      <Button style={{ margin: "0 8px" }} onClick={handlePrev}>
        {" "}
        Previous{" "}
      </Button>
      <Button type="primary" onClick={handleNext}>
        Next
      </Button>
    </div>
  );
};

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

export { ConfirmOrder, PaymentDetails, OrderConfirmation, InTransit };
//  {
//    currentStep > 0 && currentStep !== 3 && (
//      <Button style={{ margin: "0 8px" }} onClick={handlePrev}>
//        Previous
//      </Button>
//    );
//  }
//  {
//    currentStep < 3 && currentStep !== 2 ? (
//      <Button type="primary" onClick={handleNext}>
//        Next
//      </Button>
//    ) : currentStep !== 2 ? (
//      <Button
//        type="primary"
//        onClick={() => message.success("Processing complete!")}
//      >
//        Done
//      </Button>
//    ) : currentStep === 3 ? (
//      <Button
//        type="primary"
//        onClick={() => message.success("Processing complete!")}
//      >
//        Done
//      </Button>
//    ) : null;
//  }
