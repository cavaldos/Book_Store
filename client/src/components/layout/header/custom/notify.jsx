import "./notify.scss";

import React, { useState } from "react";
import { Drawer } from "antd";
import { BellOutlined } from "@ant-design/icons";
import { Badge, Space } from "antd";
const Notify = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Space
        id="bell"
        style={{
          position: "absolute",
          fontSize: "25px",
          right: "90px",
          display: "plex",
          top: "60%",
          bottom: "50%",
        }}
      >
        <Space>
          <Badge size="small" count={58}>
            <BellOutlined style={{ fontSize: "29px" }} onClick={showDrawer} />
          </Badge>
        </Space>
      </Space>

      <Drawer title="Notify" placement="right" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
export default Notify;
