import React, { useState, useEffect } from "react";
import { Table, Button } from "antd";
import Copytext from "../../User/myorder/copytext";
import { Space, Spin, message } from "antd";
import axios from "axios";
import { resetPayment } from "../../../redux/features/paymentSlice";
import {resetOrder} from "../../../redux/features/orderSlice";
import { useDispatch } from "react-redux";
function OrderDetail(props) {
  const { orderid } = props;
  const columns = [
    {
      title: "ID Book",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
  ];
  // http://localhost:8001/findorder
  const [getAllOrder, setGetAllOrder] = useState([]);
 
  useEffect(() => {
    axios
      .post("http://localhost:8001/findorder", {
        order_code: orderid,
      })
      .then((res) => {
        const { order_volume } = res.data;
        const mappedData = order_volume.map((item, index) => ({
          index,
          id: item.id_book,
          quantity: item.quantity,
        }));
        setGetAllOrder(mappedData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [orderid]);
  console.log("getAllOrdesdfsdfsdr", getAllOrder);

  return (
    <>
      <div>
        <Copytext text={`${orderid}`} />
        <Table
          columns={columns}
          dataSource={getAllOrder}
          rowKey={(record) => record.id} // add a unique key prop to each row
          pagination={{ pageSize: 10 }}
        />
      </div>
    </>
  );
}

function ConfirmOrder(props) {
  const { orderid, email } = props;
  //   http:localhost:8001/setstateorder
  const [getAllOrder, setGetAllOrder] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const handleConfirm = () => {
    axios
      .post("http://localhost:8001/setstateorder", {
        order_code: orderid,
        state: 3,
      })
      .then((res) => {
        setGetAllOrder(res.data);
        setLoading(false);
      });
    message.success("Confirm Order Success");
    dispatch(resetPayment());
    dispatch(resetOrder());
    window.location.reload();
  };

  const handleCancel = () => {
    //http://localhost:8001/removeorder
    axios
      .post("http://localhost:8001/removeorder", {
        order_code: orderid,
      })
      .then((res) => {
        setGetAllOrder(res.data);
        setLoading(false);
      });
    message.success("Cancel Order Success");
    dispatch(resetPayment());
    dispatch(resetOrder());
    window.location.reload();

  };
  return (
    <>
      <Space style={{ display: "flex", flexDirection: "column" }}>
        {/* <h3>Email User :{email}</h3> */}
        <Copytext text={`${orderid}`} />
        {loading ? <Spin style={{ margin: "10px" }} size="large" /> : <Space />}
        <Button type="primary" onClick={handleConfirm}>
          Confirm Oder
        </Button>
        <Button type="dashed" danger onClick={handleCancel}>
          Cancel Oder
        </Button>
      </Space>
    </>
  );
}

export { ConfirmOrder, OrderDetail };