import "../../main/styles.scss";

import React from "react";
import { useState } from "react";
import MenuItem from "../menu/index";
// import BreadC from "../layout/header/breadcrumb";
import Button from "@mui/material/Button";
// import Footer from "../layout/footer";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
// import Search from "../layout/header/search";

function AdminSidebar(props) {
  const {toggle}=props
  return (
    <>
      <div className="sidebar">
        <div className="logo"></div>
        <div className="menu_list">
          <div className="menu_item">
            <MenuItem
              name="Admin"
              icon=<MenuUnfoldOutlined />
              toggle={toggle}
              path="/"
            />
          </div>
          <div className="menu_item">
            <MenuItem
              name="Cart"
              icon=<MenuUnfoldOutlined />
              toggle={toggle}
              path="/cart"
            />
          </div>
          <div className="menu_item">
            <MenuItem
              name="Author"
              icon=<MenuUnfoldOutlined />
              toggle={toggle}
              path="/manager-author"
            />
          </div>{" "}
          <div className="menu_item">
            <MenuItem
              name="User"
              icon=<MenuUnfoldOutlined />
              toggle={toggle}
              path="/manager-user"
            />
          </div>{" "}
          <div className="menu_item">
            <MenuItem
              name="Revenue"
              icon=<MenuUnfoldOutlined />
              toggle={toggle}
              path="/revenue"
            />
          </div>
          <div className="menu_item">
            <MenuItem
              name="Wallet"
              icon=<MenuUnfoldOutlined />
              toggle={toggle}
              path="/wallet"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminSidebar;
