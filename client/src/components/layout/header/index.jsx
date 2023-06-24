import React from "react";
import { Image, Typography } from "antd";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import ToggleTheme from "../../button/toogle_theme";
import "./header.scss";
const Header = () => {
  const navigator = useNavigate();
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
        <Button variant="contained" onClick={()=>navigator("/signin")}>Login</Button>
        <ToggleTheme />
      </div>
    </>
  );
};

export default Header;

