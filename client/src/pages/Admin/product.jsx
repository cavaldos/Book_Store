import * as React from "react";
import { useState, useEffect } from "react";
import EditUser from "./option/editUser"; // button edit
import axios, { all } from "axios";
import { Table, Input, Button, Space, Form, Upload, Row, Col } from "antd";
import { SearchOutlined, UploadOutlined } from "@ant-design/icons";
import { useRef } from "react";
import { Modal } from "antd";
function ManagerProduct() {
  const [book, setBook] = useState([]);
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [state, setState] = useState(0)
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
  const AddBookForm = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState(null);

    const onFinish = (values) => {
      // values.Image = imageUrl;
      console.log(values);
      setLoading(true);
      axios.post('http://localhost:8001/addbook', values, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          console.log(values)
          console.log('Adding book successful:', response.data);
        })
        .catch(error => {
          console.error('Error adding book:', error);
        });

      setTimeout(() => {
        setLoading(false);
        form.resetFields();
      }, 2000);
    };

    const beforeUpload = (file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const imageDataUrl = reader.result;
        form.setFieldsValue({ Image: imageDataUrl });
      };
      return false;
    };

    const validateNumber = (_, value) => {
      if (value && isNaN(value)) {
        return Promise.reject('This must be a number');
      }
      return Promise.resolve();
    };
    
    return (
      <div>
        <h1>Add Book</h1>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          {/* <Form.Item name="Image" label="Image">
            <Upload
              beforeUpload={beforeUpload}
              showUploadList={false}
            >
              <Button icon={<UploadOutlined />}>Upload Image</Button>
            </Upload>
          </Form.Item> */}
          <Form.Item
            name="ID"
            label="ID"
            rules={[{ required: true, message: 'ID is required' }, { validator: validateNumber }]}
          >
            <Input/>
          </Form.Item>
          <Form.Item
            name="Tittle"
            label="Title"
            rules={[{ required: true, message: 'Title is required' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="Author"
            label="Author"
            rules={[{ required: true, message: 'Author is required' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="Price"
            label="Price"
            rules={[{ required: true, message: 'Price is required' }, { validator: validateNumber }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="ISBN"
            label="ISBN"
            rules={[{ required: true, message: 'ISBN is required' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="Genre"
            label="Genre"
            rules={[{ required: true, message: 'Genre is required' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="Publisher"
            label="Publisher"
            rules={[{ required: true, message: 'Publisher is required' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="Publish_Year"
            label="Publish Year"
            rules={[{ required: true, message: 'Publish year is required' }, { validator: validateNumber }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="Description"
            label="Description"
            rules={[{ required: true, message: 'Description is required' }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            name="quantity"
            label="Quantity"
            rules={[{ required: true, message: 'Quantity is required' }, { validator: validateNumber }]}
          >
            <Input/>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Add Book
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  };
  
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
  const styleBox = {
    padding: '40px',
  };
  const handleButtonClick = (state) => {
    setState(state);
  }
  return (
    <>
      <div style={styleBox}>
        <Row gutter={16}>
          <Col>
            <Button type="primary" onClick={() => handleButtonClick(1)}>
              Add Book
            </Button>
          </Col>
          <Col>
            <Button type="primary" onClick={() => handleButtonClick(0)}>
              Manage books
            </Button>
          </Col>
        </Row>
        {state === 1 ? <AddBookForm /> : <><h1>Manager Product</h1><Table dataSource={bookInfos} columns={columns} /></>}
      </div>
    </>
  );
}

export default ManagerProduct;
