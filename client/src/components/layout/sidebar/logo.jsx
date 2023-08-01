import React from "react";
import "./sidebar.scss";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";

function Logo() {
  return (
    <>
      <div id="logo">
        <Space direction="vertical" size={16}>
          <Avatar
            className="avatar-sidebar"
            shape="square"
            size={120}
            icon={<UserOutlined />}
            // src="https://zos.alipayobjects.cofm/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
        </Space>
        <h5 className="name-sidebar">khasfh</h5>
        <p className="role-sidebar">Admin</p>
      </div>
    </>
  );
}

export default Logo;
