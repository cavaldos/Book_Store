import React from "react";
import "./header.scss";

import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "black",
      backgroundColor: "white",
    }}
  />
);
const onSearch = (value) => console.log(value);
const Search_icon = () => (
  <Space direction="vertical">
    <Search
      style={{ backgroundColor: "white", width: "300px", margin: "0px 300px 0px 0px" }}
      placeholder="input search text"
      enterButton="Search"
      size="large"
      suffix={suffix}
      onSearch={onSearch}
    />
  </Space>
);
export default Search_icon;
