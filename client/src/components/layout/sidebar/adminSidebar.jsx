import "../../main/styles.scss";
import Logo from "./logo";
import React from "react";
import { Menu } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  LineChartOutlined,
} from "@ant-design/icons";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { useNavigate } from "react-router-dom";

function AdminSidebar(props) {
  const { toggle } = props;
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };
  const menuItems = [
    { key: "home", icon: <HomeOutlined />, text: "Home", path: "/" },
    {
      key: "manager-user  ",
      icon: <ManageAccountsIcon />,
      text: "Manager-user",
      path: "/admin/manage-user",
    },
    {
      key: "manager-product",
      icon: <LibraryBooksIcon />,
      text: "Manager-product",
      path: "/admin/product",
    },
    {
      key: "manager-revenue",
      icon: <LineChartOutlined />,
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
