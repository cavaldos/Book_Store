import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";

import "./menu.scss";
import "../../main/styles.scss";
import { useNavigate } from "react-router-dom";
function MenuItem(props) {
  const { path, name, icon, id, toggle } = props;
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };
  return (
    <>
      <div
        className="menu_container"
        onClick={() => {
          handleClick(path);
        }}
      >
        <div className={toggle}>
          <span className="menu-icon">{icon}</span>
          <h4 className="menu-name">{name}</h4>
        </div>
      </div>
    </>
  );
}

export default MenuItem;
