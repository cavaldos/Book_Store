import React, { useState } from "react";
import { Button, Modal } from "antd";
import axios from "axios";
import { message } from "antd";

const DeleteUser = (user) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { email } = user.user;

  const showModal = () => {
    setIsModalOpen(true);
  };
  async function handleOk(e) {
    if (!email) {
      message.warning("Please fill in all the information");
      return;
    }
    try {
      await axios
        .post(`${process.env.REACT_APP_API_PORT}/deleteuser`, {
          email,
        })
        .then((res) => {
          if (res.data === "deleted") {
            message.success("Delete success");
            setIsModalOpen(false);
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          } else if (res.data === "deletedfail") {
            message.warning("User have not sign up or wrong password");
          }
        })
        .catch((e) => {
          message.error("wrong details");
          console.log(e);
        });
    } catch (error) {
      console.log(error);
    }
  }
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Delete
      </Button>
      <Modal
        title="Delete User"
        open={isModalOpen}
        onOk={(e) => {
          handleOk();
        }}
        onCancel={handleCancel}
      >
        <p>
          Are you sure to delete this user "<a>{email}</a>"?
        </p>
      </Modal>
    </>
  );
};
export default DeleteUser;
