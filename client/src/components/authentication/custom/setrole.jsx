import React from "react";
import "../auth.scss";
import "./setrole.scss";
import { useSelector, useDispatch } from "react-redux";
import { setRole } from "../../../redux/features/roleSlice";
function Role() {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.role.role);
  const [toggle, setToggle] = React.useState("toggle-" + role);

  const handleRole = (Srole) => () => {
    setToggle("toggle-" + Srole);
    dispatch(
      setRole({
        role: Srole,
      })
    );
  };
  return (
    <>
      <div className={toggle}>
        <div className="select-role">
          <div className="user rle" onClick={handleRole("user")}>
            User
          </div>
          <div className="employee rle" onClick={handleRole("employee")}>
            Employee
          </div>
          <div className="admin rle" onClick={handleRole("admin")}>
            Admin
          </div>
        </div>
      </div>
    </>
  );
}

export default Role;
