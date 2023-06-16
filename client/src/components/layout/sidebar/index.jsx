import React from "react";

import "./sidebar.scss";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__item">
        <div className="sidebar__item__title">
          <h3>Quản lý</h3>
          <i className="fas fa-angle-down"></i>
        </div>
        <div className="sidebar__item__content"></div>
      </div>
    </div>
  );
}
export default Sidebar;
