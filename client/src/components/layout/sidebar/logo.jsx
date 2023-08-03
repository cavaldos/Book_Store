import React from "react";
import "./sidebar.scss";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";
import { useSelector } from "react-redux";
import { Tooltip } from "antd";
function Logo() {
  const role = useSelector((state) => state.role);
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
        <Tooltip placement="rightBottom" title={role.email}>
          <h5 className="name-sidebar">{role.email}</h5>
        </Tooltip>
        <p className="role-sidebar">{role.role}</p>
      </div>
    </>
  );
}

export default Logo;
