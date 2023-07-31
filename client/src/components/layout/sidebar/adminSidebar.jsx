import "../../main/styles.scss";
import Logo from "./logo";

import React from "react";
import MenuItem from "../menu/index";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

function AdminSidebar(props) {
  const { toggle } = props;
  return (
    <>
      <div className="sidebar">
        <Logo />
        <div className="menu_list">
          <div className="menu_item">
            <MenuItem
              name="Home"
              toggle={toggle}
              path="/"
              icon={<MenuUnfoldOutlined />}
            />
          </div>
          <div className="menu_item">
            <MenuItem
              name="Manager-user"
              toggle={toggle}
              path="/admin/user"
              icon={<MenuUnfoldOutlined />}
            />
          </div>
          <div className="menu_item">
            <MenuItem
              name="Manager-product"
              toggle={toggle}
              path="/admin/product"
              icon={<MenuFoldOutlined />}
            />
          </div>
          <div className="menu_item">
            <MenuItem
              name="Manager-revenue"
              toggle={toggle}
              path="/admin/revenue"
              icon={<MenuFoldOutlined />}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminSidebar;
