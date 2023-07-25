import "../layout/menu/menu.scss";
import "./styles.scss";

import React from "react";
import { useState } from "react";
import MenuItem from "../layout/menu";
import BreadC from "../layout/header/breadcrumb";
import Button from "@mui/material/Button";
import Footer from "../layout/footer";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
import Search from "../layout/header/search";

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

  const navigate = useNavigate();

  return (
    <>
      <div className={toggle}>
        {/*  */}
        <div className="header">
          <div className={scroll}>
            {" "}
            <Button
              style={{
                position: "absolute",
                width: "100px",
                right: "10px",
                backgroundColor: "white",
                color: "black",
              }}
              className="button-signin"
              variant="contained"
            >
              Log out
            </Button>
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
            <div className="search">
              <Search />
            </div>
          </div>
        </div>

        <div className="sidebar">
          <div className="logo"></div>
          <div className="menu_list">
            <div className="menu_item">
              <MenuItem
                name="Home"
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
        {/* main */}
        <div className="main">
          <div className="containers">{children}</div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
