import React from "react";
import { Image, Typography } from "antd";
import "./header.scss";
const Header = () => {
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
      

      </div>
    </>
  );
};

export default Header;

