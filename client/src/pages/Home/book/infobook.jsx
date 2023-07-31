import './book.scss'

import React, { useState } from "react";
import { Button, Modal } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Rate } from "antd";
const InfoBook = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button className="button-info" type="text" onClick={showModal}></Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="product-container">
          <div className="image">
            <img className="imag" src="" alt="" />
            
          </div>
          <h3 className="title">khanh</h3>
          <p className="author">Author:jhanh</p>
          <h4 className="price">Price :$ </h4>
          <Rate className="rating" disabled defaultValue={"89"} />
          <button className="btn">
          </button>
        </div>
      </Modal>
    </>
  );
};
export default InfoBook;