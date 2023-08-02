import "../../main/styles.scss";
import Logo from "./logo";
import React from "react";
import { Menu } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function UserSidebar(props) {
  const { toggle } = props;
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };

  const menuItems = [
    { key: "home", icon: <MenuUnfoldOutlined />, text: "Home", path: "/" },
    {
      key: "cart",
      icon: <MenuUnfoldOutlined />,
      text: "Cart",
      path: "/user/cart",
    },
    {
      key: "Payment",
      icon: <MenuFoldOutlined />,
      text: "Payment",
      path: "/user/cart/payment",
    },
    {
      key: "wallet",
      icon: <MenuFoldOutlined />,
      text: "Wallet",
      path: "/user/wallet",
    },
    {
      key: "Profile",
      icon: <MenuFoldOutlined />,
      text: "Profile",
      path: "/user/profile",
    },
  ];

  return (
    <>
      <div className="sidebar">
        <Logo />
        <div className="menu_list">
          <Menu theme="dark" mode="inline" className="menu-sidebar">
            {menuItems.map((item) => (
              <Menu.Item
                key={item.key}
                className="menu-item-sidebar"
                icon={item.icon}
                onClick={() => handleNavigate(item.path)}
              >
                {item.text}
              </Menu.Item>
            ))}
          </Menu>
        </div>
      </div>
    </>
  );
}

export default UserSidebar;

//import Notfound from "./components/layout/error/notfound";
//
