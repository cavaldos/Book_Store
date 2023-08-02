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
  const { id, image, title, author, rate, price, description } = props;

  const navigate = useNavigate();
  const role = useSelector((state) => state.role.role);

  const handleAddToCart = () => {
    const product = {
      id,
      image,
      title,
      author,
      rate,
      price,
      description,
    };

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const isProductInCart = cart.some((item) => item.title === title);

    if (isProductInCart) {
      message.warning("Product already in cart!");
    } else {
      cart.push(product);

      localStorage.setItem("cart", JSON.stringify(cart));

      message.success("Added to cart!");
    }
  };

  return (
    <>
      <div className="product-container">
        <div className="image">
          <img className="imag" src={image} alt="" />
          <InfoBook />
        </div>
        <h3 className="title">{title}</h3>
        <p className="author">Author: {author}</p>
        <h4 className="price">Price :$ {price}</h4>
        <Rate className="rating" disabled defaultValue={rate} />
        {/* <button className="btn" onClick={handleAddToCart}>
          <ShoppingCartOutlined />
        </button> */}
        {role === "user" ? (
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


