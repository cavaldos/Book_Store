import "./notify.scss";

import React, { useState } from "react";
import { Drawer } from "antd";
import { BellOutlined } from "@ant-design/icons";
import { Badge } from "antd";
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
      <Badge className="badge" count={10}>
        <BellOutlined className="bell" onClick={showDrawer} />
      </Badge>

      <Drawer
        title="Notify"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
export default Notify;
