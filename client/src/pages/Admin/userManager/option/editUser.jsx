import React, { useState } from "react";
import { Button, Modal } from "antd";
const EditUser = (user) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  // console.log("record",email);
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
      <Button type="primary" onClick={showModal}>
        See details
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
export default EditUser;
