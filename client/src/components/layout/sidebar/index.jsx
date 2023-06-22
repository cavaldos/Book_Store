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
      <div className="block"></div>


      <Sidebar style={style.menu}>
        <Menu>
          <MenuItem >
            <HomeOutlined style={style.icon} /> Home
          </MenuItem>

          <SubMenu icon=<UnorderedListOutlined /> label="Manager">
            <MenuItem onClick={() => alert("hlleo")}>
              <UsergroupAddOutlined /> User
            </MenuItem>
            <MenuItem onClick={() => alert("hlleo")}>
              <ReadOutlined /> Author
            </MenuItem>
          </SubMenu>
          <MenuItem onClick={() => alert("hlleo")}>
            <ShoppingCartOutlined style={style.icon} />
            My Cart
          </MenuItem>
          <MenuItem onClick={() => alert("hlleo")}>
            <WalletOutlined style={style.icon} />
            My Wallet
          </MenuItem>
          <MenuItem onClick={() => alert("hlleo")}>
            <LineChartOutlined style={style.icon} />
            Revenue
          </MenuItem>

          <MenuItem onClick={() => alert("hlleo")}>
            <InfoCircleOutlined style={style.icon} />
            About
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default Sider;
