import "../../main/styles.scss";
import Logo from "./logo";

import React from "react";
import MenuItem from "../menu/index";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

function UserSidebar(props) {
  const { toggle } = props;
  return (
    <>
      <div className="sidebar">
        <Logo />
        <div className="menu_list">
          <div className="menu_item">
            <MenuItem
              name="Home"
              icon={<MenuUnfoldOutlined />}
              toggle={toggle}
              path="/"
            />
          </div>

          <div className="menu_item">
            <MenuItem
              name="Cart"
              icon={<MenuUnfoldOutlined />}
              toggle={toggle}
              path="/user/cart"
            />
          </div>
          <div className="menu_item">
            <MenuItem
              name="Wallet"
              icon={<MenuUnfoldOutlined />}
              toggle={toggle}
              path="/user/wallet"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserSidebar;
