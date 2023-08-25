import "../home.scss";
import "./book.scss";
import React from "react";
import InfoBook from "./infobook";
import { message } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Rate } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Book(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id, image, title, author, rate, price, description, _id } = props;

  const role = useSelector((state) => state.role);
  const orders = useSelector((state) => state.order);

  const handleAddToCart = () => {
    const existingOrder = orders.find((order) => order.id === id);
    if (existingOrder) {
      message.warning("Product already exists");
      return;
    } else {
      let newOrder = {
        id,
        image,
        title,
        author,
        rate,
        price,
        description,
        _id,
      };
      dispatch(addToCart(newOrder));
      message.success("Product added to cart successfully");
    }
  };

  return (
    <>
      <div className="product-container">
        <div className="image">
          <img className="imag" src={image} alt="" />
          <InfoBook id={_id} />
        </div>
        <h3 className="title">{title}</h3>
        <p className="author">Author: {author}</p>
        <h4 className="price">Price :$ {price}</h4>
        <Rate className="rating" disabled defaultValue={rate} />

        {role.role === "user" ? (
          <button className="btn" onClick={handleAddToCart}>
            <ShoppingCartOutlined />
          </button>
        ) : (
          <button style={{display:"none"}}></button>
        )}
      </div>
    </>
  );
}

export default Book;
