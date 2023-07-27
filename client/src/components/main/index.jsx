import "../layout/menu/menu.scss";
import "./styles.scss";
import AdminSidebar from "../layout/sidebar/adminSidebar";
import UserSidebar from "../layout/sidebar/userSidebar";
import EmployeeSidebar from "../layout/sidebar/employeeSidebar";
import BreadC from "../layout/header/breadcrumb";
import Footer from "../layout/footer";
import Avatar from "@mui/material/Avatar";

import React from "react";
import { useState } from "react";
import { Menu, Dropdown } from "antd";
import { UserOutlined } from "@ant-design/icons";
// import "antd/dist/antd.css";

import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import Search from "../layout/header/search";

import { useSelector } from "react-redux";

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

  const handleMenuClick = (e) => {
    if (e.key === "logout") {
      // Handle logout logic
    } else if (e.key === "profile") {
      // Handle profile logic
    }
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="profile">Profile</Menu.Item>
      <Menu.Item key="logout">Logout</Menu.Item>
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

            <Dropdown overlay={menu} trigger={["click"]}>
              <Avatar className="avatar" icon={<UserOutlined />} />
            </Dropdown>
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
