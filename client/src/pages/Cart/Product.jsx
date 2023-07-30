import React from "react";
import "./styles.scss";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { message } from "antd";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


function Product(props) {
  const { id, image, description, price } = props;
  const [new_quantity, setNew_quantity] = useState(1);
  const [total, setTotal] = useState(price * new_quantity);



  const handleAddproduct = () => {
    setNew_quantity(new_quantity + 1);
    setTotal(price * (new_quantity + 1));
  };
  const handleSubproduct = () => {
    if (new_quantity > 1) {
      setNew_quantity(new_quantity - 1);
      setTotal(price * (new_quantity - 1));
    }
  };
  const removeProduct = (id) => {

     const cart = JSON.parse(localStorage.getItem("cart")) || [];
     const updatedCart = cart.filter((item) => item.id !== id);
     localStorage.setItem("cart", JSON.stringify(updatedCart));
     message.success("Product removed from cart!");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <>
      <div className="product">
        <div className="block-product res">
          <div className="image res">
            <img className="img" src={image} alt="this is picture" />
          </div>
          <div className="description res">{description}</div>
        </div>
        <div className="quantity res">
          <h3 className="icon title">{new_quantity}</h3>
          <AddIcon
            className="icon add"
            onClick={() => {
              handleAddproduct();
            }}
          />
          <RemoveIcon
            className="icon sub"
            onClick={() => {
              handleSubproduct();
            }}
          />
        </div>
        <div className="price res">${price}</div>
        <div className="remove res">
          <Button
            style={{
              color: "var(--text-dark)",
              borderColor: "var(--text-dark)",
              // hover
              "&:hover": {
                cursor: "pointer",
              },
            }}
            onClick={() => removeProduct(id)}
            variant="outlined"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
          <h5 className="total-product">Total: ${total}</h5>
        </div>
      </div>
    </>
  );
}

export default Product;
