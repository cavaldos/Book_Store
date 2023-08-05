import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import React from "react";
import { useLocation } from "react-router-dom";
import { Breadcrumb } from "antd";

const App = () => {
  const location = useLocation();
  const routeslocation = location.pathname.split("/");
  const breadcrumbItems = [
    {
      title: <HomeOutlined />,
    },
    ...routeslocation.map((route, index) => ({
      title: route,
    })),
  ];

  return <Breadcrumb items={breadcrumbItems} />;
};

export default App;
