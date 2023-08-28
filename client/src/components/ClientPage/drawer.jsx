import React from "react";
import { useState } from "react";
import { Drawer, Menu, Space } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";

import { useNavigate } from "react-router-dom";
import "./styles.scss";
function MenuDrawer() {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const showDrawer = () => {
    setDrawerVisible(true);
  };
  const closeDrawer = () => {
    setDrawerVisible(false);
  };
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <>
      <button
        style={{
          position: "relative",
          left: "180px",
          height: "50px",
          backgroundColor: "transparent",
          border: "none",
          color: "white",
          fontSize: "25px",
        }}
        onClick={() => {
          showDrawer();
        }}
      >
        <UnorderedListOutlined />
      </button>
      <Drawer
        title="Menu"
        placement="right"
        closable={false}
        onClose={closeDrawer}
        open={drawerVisible}
      >
        <Menu mode="vertical" defaultSelectedKeys={["home"]}>
          <Menu.Item key="home" onClick={() => handleNavigate("/")}>
            Home
          </Menu.Item>
          <Menu.Item key="cart" onClick={() => handleNavigate("/user/cart")}>
            Cart
          </Menu.Item>
          <Menu.Item
            key="profile"
            onClick={() => handleNavigate("/user/profile")}
          >
            Profile
          </Menu.Item>
          <Menu.Item
            key="payment"
            onClick={() => handleNavigate("/user/cart/payment")}
          >
            Payment
          </Menu.Item>
          <Menu.Item
            key="mylistorder"
            onClick={() => handleNavigate("/user/mylistorder")}
          >
            My List Order
          </Menu.Item>
          <Menu.Item
            key="create"
            onClick={() => handleNavigate("/create-account-payment")}
          >
            Create account payment
          </Menu.Item>
        </Menu>
      </Drawer>
    </>
  );
}

function MenuItems() {


  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <>
      <Space id="menu_client">
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["home"]}
          className="desktop-menu"
        >
          <Menu.Item
            key="home"
            className="menu-item"
            onClick={() => handleNavigate("/")}
          >
            Home
          </Menu.Item>
          <Menu.Item
            key="cart"
            className="menu-item"
            onClick={() => handleNavigate("/user/cart")}
          >
            Cart
          </Menu.Item>
          <Menu.Item
            key="profile"
            className="menu-item"
            onClick={() => handleNavigate("/user/profile")}
          >
            Profile
          </Menu.Item>
          <Menu.Item
            key="payment"
            className="menu-item"
            onClick={() => handleNavigate("/user/cart/payment")}
          >
            Payment
          </Menu.Item>{" "}
          <Menu.Item
            key="mylistorder"
            className="menu-item"
            onClick={() => handleNavigate("/user/mylistorder")}
          >
            My List Order
          </Menu.Item>
          <Menu.Item
            key="create"
            className="menu-item"
            onClick={() => handleNavigate("/create-account-payment")}
          >
            Create account payment
          </Menu.Item>
        </Menu>
      </Space>
    </>
  );
}

export { MenuItems, MenuDrawer };
