import "../layout/menu/menu.scss";
import "./styles.scss";

import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Footer from "../layout/footer";
import Home from "../../pages/Home";
import { useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import Search from "../layout/header/search";
import { Space } from "antd";
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";

const OnlineLayout = () => {
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
      <div className="header_online">
        <div className={scroll}>
          <Space id="button-header-online">
            <Button
              variant="contained"
              endIcon={<LoginIcon />}
              sx={{ backgroundColor: "#0277bd", color: "#000000" }}
              onClick={() => handle("/signin")}
            >
              Sign In
            </Button>
            <Button
              variant="contained"
              color="secondary"
              endIcon={<SensorOccupiedIcon />}
              onClick={() => handle("/signup")}
            >
              Sign Up
            </Button>
          </Space>
          {/* <Space id="advertising" className="advertising-text">
           WELL COME TO SMART PARKING
          </Space> */}
        </div>
      </div>
      {/* main */}
      <div className="main_online">
        <div className="containers_online">
          <Home />{" "}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default OnlineLayout;
