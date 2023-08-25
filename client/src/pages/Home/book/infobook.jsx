import "./book.scss";

import React, { useState } from "react";
import { Button, Modal } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Rate } from "antd";
import { useNavigate } from "react-router-dom";
const InfoBook = (props) => {
  const { id } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigator = useNavigate();
  const showModal = () => {
    setIsModalOpen(true);
    navigator(`/detail-book/${id}`);
    window.location.reload();
  };

  return (
    <>
      <Button className="button-info" type="text" onClick={showModal}></Button>
    </>
  );
};
export default InfoBook;
