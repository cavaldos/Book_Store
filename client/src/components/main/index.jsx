import "../layout/menu/menu.scss";
import "./styles.scss";
import AdminSidebar from "../layout/sidebar/adminSidebar";
import UserSidebar from "../layout/sidebar/userSidebar";
import EmployeeSidebar from "../layout/sidebar/employeeSidebar";
import Footer from "../layout/footer";
import Notify from "../layout/header/custom/notify";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Space } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { updateRole } from "../../redux/features/roleSlice";
import Search from "../layout/header/search";
import BreadC from "../layout/header/breadcrumb";
import AvartarUser from "../layout/header/custom/avatar";

const DefaultLayout = ({ children }) => {
  const [toggle, setToggle] = useState("close");
  const [scroll, setScroll] = useState("up");

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;
    scrollPosition > 50 ? setScroll("down") : setScroll("up");
  });
  const handleHeader = () => {
    toggle === "close" ? setToggle("open") : setToggle("close");
  };
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  const role = useSelector((state) => state.role.role);
  const roleemail = useSelector((state) => state.role.email);

  return (
    <>
      <div className={toggle}>
        <div className="header">
          <Space className={scroll}>
            <button
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
            </button>
            <Space id="brc">
              {/* <BreadC /> */}
              <Search />
            </Space>
            <Space id="space-h">
              <AvartarUser />
              <Notify />
            </Space>
          </Space>
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
          <BreadC />
          <div className="containers">{children}</div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
