import React from "react";
import { LogoutOutlined, ProfileOutlined } from "@ant-design/icons";
import { Dropdown, Space, Avatar, message } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../../redux/features/roleSlice";
import { resetUser } from "../../../../redux/features/userSlice";

const items = [
  {
    key: "1",
    label: "Profile",
    icon: <ProfileOutlined />,
  },
  {
    key: "2",
    label: "Logout",
    icon: <LogoutOutlined />,
    danger: true,
  },
];
const Avatars = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleMenuClick = (key) => {
    if (key === "1") {
      navigate("/user/profile");
    } else if (key === "2") {
      message.success("Logout Success");
      setTimeout(() => {
        dispatch(logout());
        navigate("/");
        dispatch(resetUser());
      }, 1000);
    }
  };
  return (
    <>
      <Space
        id="avt"
        style={{
          position: "absolute",
          right: "30px",
          display: "plex",
          top: "50%",
          bottom: "50%",
        }}
      >
        <Dropdown
          style={{
            color: "white",
            marginTop: "50px",
            color: "black",
            minWidth: "100px",
          }}
          menu={{
            items: items.map((item) => ({
              ...item,
              onClick: () => handleMenuClick(item.key),
            })),
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <Avatar icon={<UserOutlined />}></Avatar>
            </Space>
          </a>
        </Dropdown>
      </Space>
    </>
  );
};
export default Avatars;
