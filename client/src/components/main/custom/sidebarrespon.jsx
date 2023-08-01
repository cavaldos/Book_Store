import React, { useState } from "react";
import { Button, Drawer } from "antd";

import AdminSidebar from "../../layout/sidebar/adminSidebar";
import UserSidebar from "../../layout/sidebar/userSidebar";
import EmployeeSidebar from "../../layout/sidebar/employeeSidebar";
import { useSelector } from "react-redux";

const SidebarRespon = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const role = useSelector((state) => state.role.role);

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        style={{ position: "relative" }}
        title="Basic Drawer"
        placement="left"
        onClose={onClose}
        open={open}
        width={900}
      >
        <div
          style={{
            position: "absolute",
            backgroundColor: "aqua",
            top: "70px",
            left: "10px",
            right: "10px",
            bottom: "10px",
          }}
        >
          {role === "admin" ? (
          <AdminSidebar toggle={"open"} />
        ) : role === "employee" ? (
          <EmployeeSidebar toggle={"open"} />
        ) : (
          <UserSidebar toggle={"open"} />
        )}
        </div>
      </Drawer>
    </>
  );
};
export default SidebarRespon;
