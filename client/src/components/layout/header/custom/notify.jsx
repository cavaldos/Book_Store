import "./notify.scss";
import React, { useState } from "react";
import { Drawer } from "antd";
import { BellOutlined } from "@ant-design/icons";
import { Badge, Space } from "antd";
import { useSelector, useDispatch } from "react-redux";
// import { updateNotificationCount } from "./actions"; // Thay thế "updateNotificationCount" bằng action tương ứng của bạn

const Notify = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [showCount, setShowCount] = useState(true); // Thêm state để kiểm soát việc hiển thị số

  const showDrawer = () => {
    setOpen(true);
    setShowCount(false); // Khi mở drawer, ẩn số màu đỏ
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleCountClick = () => {
    setOpen(true);
    setShowCount(false); // Khi nhấp vào số, ẩn số màu đỏ và mở drawer
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setShowCount(true); // Khi đóng drawer, hiển thị số màu đỏ trở lại
  };

  const handleNotificationRead = () => {
    // Xử lý logic khi người dùng đọc thông báo
    // dispatch(updateNotificationCount(0)); // Cập nhật số thông báo thành 0 (hoặc giá trị tương ứng)
  };

  return (
    <>
      <Space
        id="bell"
        style={{
          position: "absolute",
          fontSize: "25px",
          right: "90px",
          display: "flex",
          top: "60%",
          bottom: "50%",
        }}
      >
        <Space>
          <Badge
            size="small"
            count={user.number_notification}
            showZero
            onClick={handleCountClick} // Xử lý sự kiện khi nhấp vào số
          >
            <BellOutlined style={{ fontSize: "29px" }} onClick={showDrawer} />
          </Badge>
        </Space>
      </Space>

      <Drawer
        title="Notify"
        placement="right"
        onClose={handleDrawerClose}
        open={open}
        afterOpenChange={(visible) => {
          if (!visible) handleNotificationRead(); // Xử lý logic khi drawer đóng
        }}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default Notify;
