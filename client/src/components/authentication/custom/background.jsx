import React from "react";
import "../auth.scss";
import { useSelector } from "react-redux";
function Background() {
  const role = useSelector((state) => state.role.role);
  return (
    <>
      <div className="background">
        <div className={role} >
        <div className="k"></div>
        {/* </div> */}
      </div></div>
    </>
  );
}

export default Background;
