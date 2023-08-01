import "../layout/menu/menu.scss";
import "./styles.scss";

import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Footer from "../layout/footer";
import Home from "../../pages/Home";
import { useNavigate } from "react-router-dom";
import Search from "../layout/header/search";
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
          <Button
            className="button-signin"
            variant="contained"
            onClick={() => handle("/signin")}
          >
            Sign in
          </Button>
          <Button
            className="button-signup"
            variant="contained"
            onClick={() => handle("/signup")}
          >
            Sign Up
          </Button>
          <Search />
        </div>
      </div>

      {/* main */}
      <div className="main_online">
        <div className="containers_online">
          <Home />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default OnlineLayout;
