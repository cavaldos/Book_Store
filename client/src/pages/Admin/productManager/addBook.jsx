import { Table, Input, Button, Space, Form, Upload, Row, Col } from "antd";
import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
function AddBookForm() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);

  const onFinish = (values) => {
    // values.Image = imageUrl;
    console.log(values);
    setLoading(true);
    axios
      .post(`${process.env.REACT_APP_API_PORT}/addbook`, values, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(values);
        console.log("Adding book successful:", response.data);
      })
      .catch((error) => {
        console.error("Error adding book:", error);
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
      return Promise.reject("This must be a number");
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
          rules={[
            { required: true, message: "ID is required" },
            { validator: validateNumber },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="Tittle"
          label="Title"
          rules={[{ required: true, message: "Title is required" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="Author"
          label="Author"
          rules={[{ required: true, message: "Author is required" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="Price"
          label="Price"
          rules={[
            { required: true, message: "Price is required" },
            { validator: validateNumber },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="ISBN"
          label="ISBN"
          rules={[{ required: true, message: "ISBN is required" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="Genre"
          label="Genre"
          rules={[{ required: true, message: "Genre is required" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="Publisher"
          label="Publisher"
          rules={[{ required: true, message: "Publisher is required" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="Publish_Year"
          label="Publish Year"
          rules={[
            { required: true, message: "Publish year is required" },
            { validator: validateNumber },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="Description"
          label="Description"
          rules={[{ required: true, message: "Description is required" }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name="quantity"
          label="Quantity"
          rules={[
            { required: true, message: "Quantity is required" },
            { validator: validateNumber },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Add Book
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
export default AddBookForm;
