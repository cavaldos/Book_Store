import React, { useEffect, useState } from "react";
import "./sidebar.scss";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";
import { useSelector } from "react-redux";
import { Tooltip } from "antd";
function Logo() {
  const role = useSelector((state) => state.role);
  const email = useSelector((state) => state.role.email);
  const [avatar, setAvatar] = React.useState("");
  const [userData, setUserData] = useState({
    username: '',
  });
  console.log(email);

  useEffect(() => {
    // Fetch user data from the backend based on the email
    fetchUserData();
  }, [email]);

  const fetchUserData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/getProfile`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        const data = await response.json();
        setUserData(data);
      } else {
        console.error('Failed to fetch user data:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };


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
        <Tooltip placement="rightBottom" title={userData.username}>
          <h5 className="name-sidebar">{userData.username}</h5>
        </Tooltip>
        <p className="role-sidebar">{role.role}</p>
      </div>
    </>
  );
}

export default Logo;
