import React from "react";

import Header from "../header";
import Sider from "../sidebar";
import "./main.scss";

const Revenue = () => {
  return (
    <>
      <Header />
      <Sider />
      <div className="main">
        <div className="Revenue">
          <h1>Revenue</h1>
        </div>
      </div>
    </>
  );
};

export default Revenue;
