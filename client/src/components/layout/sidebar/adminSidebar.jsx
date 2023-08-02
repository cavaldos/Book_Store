import "../../main/styles.scss";
import Logo from "./logo";
import React from "react";
import { Menu } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function AdminSidebar(props) {
  const { toggle } = props;
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };
  const menuItems = [
    { key: "home", icon: <MenuUnfoldOutlined />, text: "Home", path: "/" },
    {
      key: "manager-user  ",
      icon: <MenuUnfoldOutlined />,
      text: "Manager-user",
      path: "/admin/manage-user",
    },
    {
      key: "manager-product",
      icon: <MenuFoldOutlined />,
      text: "Manager-product",
      path: "/admin/product",
    },
    {
      key: "manager-revenue",
      icon: <MenuFoldOutlined />,
      text: "Manager-revenue",
      path: "/admin/revenue",
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

export default AdminSidebar;
