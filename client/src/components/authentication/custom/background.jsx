import React from "react";
import "../auth.scss";
import { useSelector } from "react-redux";
function Background(props) {
  const role = useSelector((state) => state.role.role);
  console.log(role);
  console.log(typeof role);
  return (
    <>
      <div className="background">
        <div className={role}></div>
      </div>
    </>
  );
}

export default Background;
