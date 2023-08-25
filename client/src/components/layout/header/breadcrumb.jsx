import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import React from "react";
import { useLocation } from "react-router-dom";
import { Breadcrumb } from "antd";

const App = () => {
  const location = useLocation();
  const routeslocation = location.pathname.split("/");

  const shortenText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "";
  };

  const breadcrumbItems = [
    {
      title: <HomeOutlined />,
    },
    ...routeslocation.map((route, index) => ({
      title:
        index === routeslocation.length - 1 ? shortenText(route, 0) : route,
    })),
  ];

  return (
    <>
      <Breadcrumb style={{ margin: " 0 0 0 20px" }} items={breadcrumbItems} />
    </>
  );
};

export default App;
