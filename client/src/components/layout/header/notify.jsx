import React from "react";
import { Badge, Button, Drawer } from "antd";
import { useState, useEffect } from "react";

import { NotificationOutlined, BellOutlined } from "@ant-design/icons";
const Notify = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {}, []);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button
        style={{ backgroundColor: "white", padding: "10px", border: "none" }}
        onClick={showDrawer}
      >
        <Badge count={5} style={{ margin: "0px 10px 0px 0xp" }}>
          <BellOutlined
            style={{
              fontSize: "2rem",
              position: "relative",
              bottom: "10px",
              color: "black",
              border: "5px solid white",
            }}
          />
        </Badge>
      </Button>
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <input
          type="text"
          placeholder="Search..."
          style={{
            width: "100%",
            height: "30px",
            borderRadius: "5px",
            border: "1px solid black",
            margin: "0px 0px 10px 0px",
          }}
        />
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default Notify;
