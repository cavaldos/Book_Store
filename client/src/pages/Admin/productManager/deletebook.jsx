import { FUNDING } from "@paypal/react-paypal-js";
import { Button, message } from "antd";
import axios from "axios";
function DeleteBook(props) {
  const { id } = props;
  console.log("khanh", id);

  async function deleteBook() {
    axios
      .delete(`${process.env.REACT_APP_API_PORT}/deletebook`, {
        data: {
          ID: id,
        },
      })
      .then((response) => {
        console.log(response);
        message.success("Delete book successfully");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <Button onClick={deleteBook}>Delete</Button>
    </>
  );
}

export default DeleteBook;
