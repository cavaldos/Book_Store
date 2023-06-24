import React from "react";

import Header from "../header";
import Sider from "../sidebar";
import "./main.scss";

const Cart = () => {
  return (
    <>
      <Header />
      <Sider />
      <div className="main">
        <div className="Cart">
          <h1>Cart</h1>
        </div>
      </div>
    </>
  );
};

export default Cart;
