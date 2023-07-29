import "../layout/menu/menu.scss";
import "./styles.scss";
import AdminSidebar from "../layout/sidebar/adminSidebar";
import UserSidebar from "../layout/sidebar/userSidebar";
import EmployeeSidebar from "../layout/sidebar/employeeSidebar";
import BreadC from "../layout/header/breadcrumb";
import Footer from "../layout/footer";
import Search from "../layout/header/search";
import Notify from "./custom/notify";

import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

import Avatar from "@mui/material/Avatar";
import { Menu, Dropdown } from "antd";

import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const DefaultLayout = ({ children }) => {
  const [toggle, setToggle] = useState("open");
  const [scroll, setScroll] = useState("up");

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;
    scrollPosition > 50 ? setScroll("down") : setScroll("up");
  });
  const handleHeader = () => {
    toggle === "open" ? setToggle("close") : setToggle("open");
  };
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  const role = useSelector((state) => state.role.role);
  const roleemail = useSelector((state) => state.role.email);

  const menu = (
    <Menu style={{ borderRadius: "5px" }}>
      <Menu.Item>
        <button style={{ border: "none", backgroundColor: "transparent" }}>
          Home
        </button>
      </Menu.Item>
      <Menu.Item>
        <button style={{ border: "none", backgroundColor: "transparent" }}>
          Profile
        </button>
      </Menu.Item>
      <Menu.Item>
        <button
          style={{
            border: "none",
            backgroundColor: "transparent",
            fontWeight: "bold",
            color: "red",
          }}
        >
          Logout
        </button>
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <div className={toggle}>
        {/*  */}
        <div className="header">
          <div className={scroll}>
            <div
              className="button"
              onClick={() => {
                handleHeader();
              }}
            >
              {toggle === "open" ? (
                <MenuFoldOutlined className="button-icon" />
              ) : (
                <MenuUnfoldOutlined className="button-icon" />
              )}
            </div>
            <div className="breadcrumb">
              <BreadC />
            </div>
            <Search />
            <Dropdown trigger={["click"]}>
              <Avatar
                className="avatar"
                alt={roleemail}
                src="/static/images/avatar/1.jpg"
              />
            </Dropdown>

            <Notify />
          </div>
        </div>

        {role === "admin" ? (
          <AdminSidebar toggle={toggle} />
        ) : role === "employee" ? (
          <EmployeeSidebar toggle={toggle} />
        ) : (
          <UserSidebar toggle={toggle} />
        )}

        {/*  dsf*/}
        <div className="main">
          <div className="containers">{children}</div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
