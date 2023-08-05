import React from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space, Avatar } from "antd";

const items = [
  {
    key: "1",
    label: "a menu item",
  },
  {
    key: "2",
    label: "sadf",
    icon: <SmileOutlined />,
  },
  {
    key: "3",
    label: "dsaf",
  },
  {
    key: "4",
    danger: true,
    label: "a danger item",
  },
];
const Notify = () => {
  return (
    <>
      <Dropdown
        style={{ backgroundColor: "white", color: "red" }}
        menu={{ items }}
      >
        <Space>
          Hover me
          <DownOutlined />
          <Avatar />
        </Space>
      </Dropdown>
    </>
  );
};
export default Notify;
