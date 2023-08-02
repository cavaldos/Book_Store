import React, { useEffect } from "react";
import "./sidebar.scss";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";
import { useSelector } from "react-redux";
import { Tooltip } from "antd";
function Logo() {
  const role = useSelector((state) => state.role);
  const [avatar, setAvatar] = React.useState("");


  useEffect(() => {
    // Fetch the user's avatar from the backend when the component mounts
    const fetchAvatar = async () => {
      try {
        const res = await fetch(`http://localhost:8000/getAvatar?email=${role.email}`);
        const data = await res.json();
        setAvatar(data.photoUrl);
      } catch (err) {
        console.warn(err);
      }
    };
    fetchAvatar();
  }, [role.email]);
  

  return (
    <>
      <div id="logo">
        <Space direction="vertical" size={16}>
          <Avatar
            className="avatar-sidebar"
            shape="square"
            size={120}
            // icon={<UserOutlined />}
            src={avatar || "img/unknown.png"}
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
