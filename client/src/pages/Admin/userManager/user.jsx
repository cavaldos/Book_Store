import * as React from "react";
import { useState, useEffect } from "react";
import axios, { all } from "axios";
import { Table, Input, Button, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useRef } from "react";
import DeleteUser from "./option/deleteUser";
import { Modal } from "antd";

import AddUser from "./option/addUser";
import { message, Tag } from "antd";
import { EyeInvisibleOutlined } from "@ant-design/icons";

function ManagerUser() {
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_PORT}/getallusers`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const userInfos = users.map((user) => {
    return {
      key: user.id,
      id: user.id,
      username: user.username,
      email: user.email,
      password: user.password,
      balance: user.account_balance,
      role: user.role,
      tags: [user.role],
    };
  });
  //api search  ${process.env.REACT_APP_API_PORT}/user/search?username=abc
  const searchInputRef = useRef(null);
  const getColumnSearchProps = (dataIndex, placeholder) => {
    return {
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder={`Search ${placeholder}`}
            value={selectedKeys[0]}
            onChange={(e) =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: "block" }}
            ref={searchInputRef}
          />
          <Space>
            <Button
              // type="primary"
              onClick={() => confirm()}
              icon={<SearchOutlined />}
              size="small"
              style={{ width: 90 }}
            >
              Search
            </Button>
            <Button
              onClick={() => {
                clearFilters();
                setSelectedKeys([]);
                confirm();
              }}
              size="small"
              style={{ width: 90 }}
            >
              Reset
            </Button>
          </Space>
        </div>
      ),
      filterIcon: (filtered) => (
        <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
      ),
      onFilter: (value, record) =>
        record[dataIndex]
          .toString()
          .toLowerCase()
          .includes(value.toLowerCase()),
      onFilterDropdownOpenChange: (visible) => {
        if (visible) {
          setTimeout(() => searchInputRef.current?.select(), 100);
        }
      },
      render: (text) => text,
    };
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id - b.id,
      ...getColumnSearchProps("id", "ID"),
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
      sorter: (a, b) => a.username.localeCompare(b.username),
      ...getColumnSearchProps("username", "Username"),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: (a, b) => a.email.localeCompare(b.email),
      ...getColumnSearchProps("email", "Email"),
    },
    {
      title: "Password",
      dataIndex: "password",
      key: "password",
      sorter: (a, b) => a.password.localeCompare(b.password),
      // ...getColumnSearchProps("password", "Password"),
      render: (password) => (
        <div>
          ****
          <Button
            type="link"
            size="small"
            onClick={() => {
              Modal.info({
                title: "Password",
                content: password,
              });
            }}
          >
            <EyeInvisibleOutlined />
          </Button>
        </div>
      ),
    },
    {
      title: "Balance",
      dataIndex: "balance",
      key: "balance",
      sorter: (a, b) => a.balance - b.balance,
      ...getColumnSearchProps("balance", "Balance"),
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",

      ...getColumnSearchProps("role", "Role"),
      render: (_, { tags }) => (
        <>
          {tags &&
            tags.map((tag) => {
              // Add a check for tags existence
              let color;
              if (tag === "user") {
                color = "green";
              } else if (tag === "admin") {
                color = "blue";
              } else if (tag === "employee") {
                color = "orange";
              } else {
                color = "geekblue";
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
        </>
      ),
    },
    // {
    //   title: "Edit",
    //   key: "edit",
    //   render: (text, record) => <EditUser user={record} />,
    // },
    {
      title: "Delete",
      key: "delete",
      render: (text, record) => <DeleteUser user={record} />,
    },
  ];

  const [number, setNumber] = useState(0);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_PORT}/getnumberuser`)
      .then((response) => {
        setNumber(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  return (
    <>
      <h1
        style={{
          backgroundColor: "#f0f2f5",
          textAlign: "center",
          width: "20%",
          margin: "10px auto",
          borderRadius: "10px",
        }}
      >
        Manager User
      </h1>

      <div style={{ overflowX: "auto" }}>
        <Table dataSource={userInfos} columns={columns} />
      </div>

      <h3>Number of user: {number}</h3>
      <AddUser />
    </>
  );
}

export default ManagerUser;
