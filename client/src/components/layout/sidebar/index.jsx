import React from "react";
import {
  WalletOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import useState from "react";
import "./sidebar.scss";

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <Menu
          style={{
            fontWeight: "bold",
            fontSize: "20px",
            padding: "10px 0px 0px 0px", // hover
          }}
          items={[
            {
              label: "Home",
              key: "/",
              icon: <HomeOutlined style={{ fontSize: "20px" }} />,
            },
            {
              label: "Your cart",
              key: "/your-cart",
              icon: <ShoppingCartOutlined style={{ fontSize: "20px" }} />,
            },
            {
              label: "Wallets",
              key: "/wallets",
              icon: <WalletOutlined style={{ fontSize: "20px" }} />,
            },
          ]}
        />
      </div>
    </>
  );
}

export default Sidebar;
