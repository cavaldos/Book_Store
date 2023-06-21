import React from "react";
import { Image, Typography } from "antd";
import "./header.scss";
import Notify from "./notify";
import User from "./user";
import Search from "./search";
import Menu from "./menu";
import Search_icon from "./search";
const Header = () => {
  // const [user, setUser] = userState(null);
  return (
    <>
      <div className="header">
        <Image
          style={{ backgroundColor: "white" }}
          src="logo512.png"
          alt="logo"
          width={40}
          height={40}
        />
        <Typography.Title
          style={{ backgroundColor: "white", margin: "0px auto 0px 20px" }}
          level={3}
          className="title"
        >
          Book Store
        </Typography.Title>
        <Search_icon style={{color :"red"}} />
        <Notify />

      </div>
    </>
  );
};

export default Header;
