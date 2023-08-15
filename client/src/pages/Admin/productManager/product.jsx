import * as React from "react";
import { useState, useEffect } from "react";
import EditUser from "../userManager/option/editUser"; // button edit
import axios, { all } from "axios";
import { Table, Input, Button, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useRef } from "react";
import { Modal } from "antd";
function ManagerProduct() {
  const [book, setBook] = useState([]);
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  //http:localhost:8000/getallbooks
  useEffect(() => {
    axios
      .get("http://localhost:8001/getallbookmanage")
      .then((response) => {
        setBook(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const bookInfos = book.map((book) => {
    return {
      key: book.ID,
      id: book.ID,
      title: book.Tittle,
      author: book.Author,
      price: book.Price,
      quantity: book.quantity,
      publish_year: book.Publish_Year,
      genre: book.Genre,
    };
  });

  ///search
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
              type="primary"
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
          ? record[dataIndex]
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase())
          : "",
      onFilterDropdownOpenChange: (visible) => {
        if (visible) {
          setTimeout(() => searchInputRef.current.select(), 100);
        }
      },
    };
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
      sortDirections: ["descend", "ascend"],
      ...getColumnSearchProps("id", "ID"),
    },
    {
      title: "Title",
      dataIndex: "title",
      sorter: (a, b) => a.title.localeCompare(b.title),
      sortDirections: ["descend", "ascend"],
      ...getColumnSearchProps("title", "Title"),
    },
    {
      title: "Author",
      dataIndex: "author",
      sorter: (a, b) => {
        if (a.title && b.title) {
          return a.title.localeCompare(b.title);
        } else if (a.title) {
          return 1;
        } else if (b.title) {
          return -1;
        } else {
          return 0;
        }
      },
      sortDirections: ["descend", "ascend"],
      ...getColumnSearchProps("author", "Author"),
    },
    {
      title: "Price",
      dataIndex: "price",
      sorter: (a, b) => a.price - b.price,
      sortDirections: ["descend", "ascend"],
      ...getColumnSearchProps("price", "Price"),
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      sorter: (a, b) => a.quantity - b.quantity,
      sortDirections: ["descend", "ascend"],
      ...getColumnSearchProps("quantity", "Quantity"),
    },
    {
      title: "Publish Year",
      dataIndex: "publish_year",
      sorter: (a, b) => a.publish_year - b.publish_year,
      sortDirections: ["descend", "ascend"],
      ...getColumnSearchProps("publish_year", "Publish Year"),
    },
    {
      title: "Genre",
      dataIndex: "genre",
      sorter: (a, b) => a.genre.localeCompare(b.genre),
      sortDirections: ["descend", "ascend"],
      ...getColumnSearchProps("genre", "Genre"),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => <EditUser record={record} />,
    },
  ];
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  return (
    <>
      <h1>Manager Product</h1>
      <div style={{ overflowX: "auto" }}>
        <Table dataSource={bookInfos} columns={columns} />
      </div>
    </>
  );
}

export default ManagerProduct;
