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
  return (
    <div className="sider">
      <div className="block">LOGO</div>

      <Sidebar style={style.menu}>
        <Menu>
          <MenuItem onClick={() => alert("home")}>
            <HomeOutlined style={style.icon} /> Home
          </MenuItem>

          <SubMenu icon=<UnorderedListOutlined /> label="Manager">
            <MenuItem onClick={() => alert("user")}>
              <UsergroupAddOutlined /> User
            </MenuItem>
            <MenuItem onClick={() => alert("author")}>
              <ReadOutlined /> Author
            </MenuItem>
          </SubMenu>
          <MenuItem onClick={() => alert("my cart")}>
            <ShoppingCartOutlined style={style.icon} />
            My Cart
          </MenuItem>
          <MenuItem onClick={() => alert("my wallet")}>
            <WalletOutlined style={style.icon} />
            My Wallet
          </MenuItem>
          <MenuItem onClick={() => alert("Revenue")}>
            <LineChartOutlined style={style.icon} />
            Revenue
          </MenuItem>

          <MenuItem onClick={() => alert("about")}>
            <InfoCircleOutlined style={style.icon} />
            About
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default Sider;
