import React from "react";

import "./sidebar.scss";
import Home from "./home";
import ManagerAuthor from "./manager_author";
import ManagerUser from "./manager_user";
import Profile from "./profile";
function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <Profile />
        <Home />
        <ManagerAuthor />
        <ManagerUser />
      </div>
    </>
  );
}
export default Sidebar;
