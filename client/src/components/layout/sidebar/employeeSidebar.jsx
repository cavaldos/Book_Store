import React from "react";
import { Menu } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";

import { useNavigate } from "react-router-dom";

import Logo from "./logo";

const menuItems = [
  { key: "home", icon: <HomeOutlined />, text: "Home", path: "/" },
  {
    key: "profile",
    icon: <ProfileOutlined />,
    text: "Profile",
    path: "/employee/profile",
  },
  {
    key: "confirm-order",
    icon: <PrecisionManufacturingIcon />,
    text: "Manager Order",
    path: "/employee/confirm-order",
  },
];

function EmployeeSidebar(props) {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
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
  );
}

export default EmployeeSidebar;
