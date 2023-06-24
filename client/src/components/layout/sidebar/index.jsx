import React from "react";
import {
  WalletOutlined,
  LineChartOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  ReadOutlined,
  UsergroupAddOutlined,
  UnorderedListOutlined,
  // NotificationOutlined,
  // UserOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import "./sidebar.scss";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

const style = {
  icon: {
    paddingRight: "18px",
    paddingLeft: "12px",
  },
  menu: {
    position: "absolute",
    width: "100%",
    left: "0px",
    right: "0px",
  },
};

function Sider() {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="sider">
      <div className="block">LOGO</div>

      <Sidebar style={style.menu}>
        <Menu>
          <MenuItem onClick={() => handleClick("/")}>
            <HomeOutlined style={style.icon} /> Home
          </MenuItem>

          <SubMenu icon=<UnorderedListOutlined /> label="Manager">
            <MenuItem onClick={() => handleClick("/manager-user")}>
              <UsergroupAddOutlined /> User
            </MenuItem>
            <MenuItem onClick={() => handleClick("/manager-author")}>
              <ReadOutlined /> Author
            </MenuItem>
          </SubMenu>
          <MenuItem onClick={() => handleClick("/my-cart")}>
            <ShoppingCartOutlined style={style.icon} />
            My Cart
          </MenuItem>
          <MenuItem onClick={() => handleClick("/my-wallet")}>
            <WalletOutlined style={style.icon} />
            My Wallet
          </MenuItem>
          <MenuItem onClick={() => handleClick("/revenue")}>
            <LineChartOutlined style={style.icon} />
            Revenue
          </MenuItem>

          <MenuItem onClick={() => handleClick("/about")}>
            <InfoCircleOutlined style={style.icon} />
            About
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default Sider;
