import React, { useState, useEffect } from "react";
import { Card, Space, Avatar, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import InforOrder from "./inforDetail/inforOrder";
import InforWallet from "./inforDetail/inforWallet";
import ProfileUser from "./inforDetail/profileUser";
import { useSelector } from "react-redux";
import "./profile.scss";

const { Title, Text } = Typography;

function Profile() {
  const user = useSelector((state) => state.user);

  const [activeTabKey, setActiveTabKey] = useState(
    localStorage.getItem("activeTabKey") || "profile_user"
  );

  const onTabChange = (key) => {
    setActiveTabKey(key);
    localStorage.setItem("activeTabKey", key);
  };

  const tabListNoTitle = [
    {
      key: "profile_user",
      label: "Profile User",
    },
    {
      key: "information_wallet",
      label: "Information Wallet",
    },
    {
      key: "information_order",
      label: "Information Order",
    },
  ];

  const contentListNoTitle = {
    profile_user: <ProfileUser />,
    information_wallet: <InforWallet />,
    information_order: <InforOrder />,
  };

  useEffect(() => {
    localStorage.setItem("activeTabKey", activeTabKey);
  }, [activeTabKey]);

  return (
    <>
      <div className="wrapper-profile">
        <div className="profile-background">sfa</div>
        <div className="profile-infor">
          <Space className="profile-infor-detail">
            <Avatar size={120} icon={<UserOutlined />} />
            <Title style={{ margin: "5px 0" }}>h1. Antdesign</Title>
            <h3>role</h3>
            <Text type="success">Ant Design (success)</Text>
          </Space>

          <Card
            bordered={false}
            className="profile-content"
            tabList={tabListNoTitle}
            activeTabKey={activeTabKey}
            // tabBarExtraContent={<a href="#">More</a>}
            onTabChange={onTabChange}
          >
            {contentListNoTitle[activeTabKey]}
          </Card>
        </div>
      </div>
    </>
  );
}

export default Profile;
