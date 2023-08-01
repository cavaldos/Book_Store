import "../../main/styles.scss";
import React from "react";
import MenuItem from "../menu/index";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import Logo from "./logo";
function EmployeeSidebar(props) {
  const { toggle } = props;
  return (
    <>
      <div className="sidebar">
        <Logo />
        <div className="menu_list">
          <MenuItem
            name="Employee"
            icon={<MenuUnfoldOutlined />}
            toggle={toggle}
            path="/"
          />

          <MenuItem
            name="Cart"
            icon={<MenuUnfoldOutlined />}
            toggle={toggle}
            path="/cart"
          />

          <MenuItem
            name="Author"
            icon={<MenuUnfoldOutlined />}
            toggle={toggle}
            path="/manager-author"
          />

          <MenuItem
            name="User"
            icon={<MenuUnfoldOutlined />}
            toggle={toggle}
            path="/user/manager-user"
          />

          <MenuItem
            name="Revenue"
            icon={<MenuUnfoldOutlined />}
            toggle={toggle}
            path="/user/revenue"
          />

          <MenuItem
            name="Wallet"
            icon={<MenuUnfoldOutlined />}
            toggle={toggle}
            path="/user/wallet"
          />
        </div>
      </div>
    </>
  );
}

export default EmployeeSidebar;
