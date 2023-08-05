import React from "react";
import { Form, Input, Button, message } from "antd";

import "./infor.scss"; // Import custom CSS file

function ProfileUser() {
  const onFinish = (values) => {
    message.success("update succes")
    console.log("Form values:", values);
    console.log("dsaf", values.email);
  };


  return (
    <div className="profile-user">
      <h1>Update User Information</h1>
      <Form name="profileForm" onFinish={onFinish}>
        <Form.Item
          name="lastName"
          label="Last Name"
          rules={[
            {
              required: true,
              message: "Please enter your last name",
            },
          ]}
          className="custom-form-item" // Apply custom CSS class to Form.Item
        >
          <Input placeholder="input search text" />
        </Form.Item>

        <Form.Item
          name="firstName"
          label="First Name"
          rules={[
            {
              required: true,
              message: "Please enter your first name",
            },
          ]}
          className="custom-form-item" // Apply custom CSS class to Form.Item
        >
          <Input placeholder="input search text" />
        </Form.Item>

        <Form.Item
          name="username"
          label="Username"
          rules={[
            {
              required: true,
              message: "Please enter your username",
            },
          ]}
          className="custom-form-item" // Apply custom CSS class to Form.Item
        >
          <Input placeholder="input search text" />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please enter your password",
            },
          ]}
          className="custom-form-item" // Apply custom CSS class to Form.Item
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: "Please enter your email",
            },
            {
              type: "email",
              message: "Please enter a valid email",
            },
          ]}
          className="custom-form-item" // Apply custom CSS class to Form.Item
        >
          <Input placeholder="input search text" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
          
          >
            Update
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default ProfileUser;
