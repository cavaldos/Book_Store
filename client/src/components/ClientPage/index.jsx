import "../layout/menu/menu.scss";
import "./styles.scss";

import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Footer from "../layout/footer";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import Search from "../layout/header/search";
import { Space, Menu, Avatar } from "antd";
import Avatars from "../layout/header/custom/avatar";
import { MenuDrawer, MenuItems } from "./drawer";
const ClientPage = ({ children }) => {
  const [scroll, setScroll] = useState("up_online");

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;
    scrollPosition > 50 ? setScroll("down_online") : setScroll("up_online");
  });

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  const navigate = useNavigate();
  const handle = (path) => {
    navigate(path);
  };

  return (
    <>
      <div className="header_client">
        <Space id="logo_client">
          <h2>BOOK STORE</h2>
        </Space>
        <Space id="search_client">
          <Search />
        </Space>
        <Space id="avatar_client">
          <Avatars />
        </Space>
        <MenuItems />
        <Space id="drawer">
          <MenuDrawer />
        </Space>
      </div>

      <div className="main_client">
        <div className="containers_client">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default ClientPage;
