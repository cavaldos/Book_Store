import "./notify.scss";
import React, { useState } from "react";
import { Drawer } from "antd";
import { BellOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Space } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Notify = () => {
  const order = useSelector((state) => state.order);
  const role = useSelector((state) => state.role.role);
  const [count, setCount] = useState(order.length);
  const navigate = useNavigate();
  const handleCart = () => {
    navigate("/user/cart");
  };

  const handleCountClick = () => {
    setCount(0);
  };

  return (
    <>
      <Space
        id="bell"
        style={{
          position: "absolute",
          fontSize: "25px",
          right: "90px",
          display: "flex",
          top: "60%",
          bottom: "50%",
        }}
      >
        <Space>
          {role === "user" ? (
            <Badge count={order.length} onClick={handleCountClick}>
              <ShoppingCartOutlined
                style={{ fontSize: "25px" }}
                onClick={handleCart}
              />
            </Badge>
          ) : (
            <></>
          )}
        </Space>
      </Space>
    </>
  );
};

export default Notify;
