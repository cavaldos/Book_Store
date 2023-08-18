import "../../main/styles.scss";
import Logo from "./logo";
import React from "react";
import { Menu } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ShoppingCartOutlined,
  HomeOutlined,
  WalletOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import { useNavigate } from "react-router-dom";

function UserSidebar(props) {
  const { toggle } = props;
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };

  const menuItems = [
    { key: "home", icon: <HomeOutlined />, text: "Home", path: "/" },
    {
      key: "cart",
      icon: <ShoppingCartOutlined />,
      text: "Cart",
      path: "/user/cart",
    },
    {
      key: "Payment",
      icon: <WalletOutlined />,
      text: "Payment",
      path: "/user/cart/payment",
    },

    {
      key: "Profile",
      icon: <ProfileOutlined />,
      text: "Profile",
      path: "/user/profile",
    },
    {
      key: "MyOrder",
      icon: <PrecisionManufacturingIcon />,
      text: "MyOrder",
      path: "/user/myorder",
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
