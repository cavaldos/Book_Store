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
          <button className="user rle" onClick={handleRole("user")}>
            User
          </button>
          <button className="employee rle" onClick={handleRole("employee")}>
            Employee
          </button>
          <button className="admin rle" onClick={handleRole("admin")}>
            Admin
          </button>
        </div>
      </div>
    </>
  );
}

export default Role;
