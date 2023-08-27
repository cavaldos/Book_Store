import React, { useState } from "react";
import { Button, Modal } from "antd";
import axios from "axios";
import { message } from "antd";
import { useSelector } from "react-redux";

const DeleteUser = (user) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { email } = user.user;
  const token = useSelector((state) => state.role.token);

  const showModal = () => {
    setIsModalOpen(true);
  };
  async function handleOk(e) {
    console.log("token", token);
    if (!email) {
      message.warning("Please fill in all the information");
      return;
    }
    console.log("email", email);
    try {
      await axios
        .delete(`${process.env.REACT_APP_API_PORT}/deleteuser`, {
          data: {
            email,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log("res", res.data);
          if (res.data === "deleted") {
            message.success("Delete success");
            setIsModalOpen(false);
            setTimeout(() => {
              window.location.reload();
            }, 1500);
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
