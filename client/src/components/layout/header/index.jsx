import React from "react";
import { userState } from "react";

import "./header.scss";
import User from "./user";
import Search from "./search";
import Menu from "./menu";
const Header = () => {
  // const [user, setUser] = userState(null);
  return (
    <>
      <header className="header">
        <h2 className="logo">Book Store</h2>
        <nav className="navigation">
          <Search />
          <Menu />
          <User />
        </nav>
      </header>
    </>
  );
};

export default Header;
