import React from "react";

import Header from "../header";
import Sider from "../sidebar";
import "./main.scss";

const Wallet = () => {
  return (
    <>
      <Header />
      <Sider />
      <div className="main">
        <div className="wallet">
          <h1>Wallet</h1>
        </div>
      </div>
    </>
  );
};

export default Wallet;
