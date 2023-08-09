import "../home.scss";
import "./book.scss";
import React from "react";
import BookButton from "./infobook";
import { message } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Rate } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../../redux/features/orderSlice";
function Book(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id, image, title, author, rate, price, description, isbn, genre, publish_year, publisher } = props;
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
          <BookButton bookInfo={{ id,image,title, author, price, rate, description, isbn,  genre, publish_year, publisher }}/>
        </div>
        <h3 className="title">{title}</h3>
        <p className="author">Author: {author}</p>
        <h4 className="price">Price :$ {price}</h4>
        <Rate className="rating" disabled defaultValue={rate} />
        {/* <button className="btn" onClick={handleAddToCart}>
          <ShoppingCartOutlined />
        </button> */}
        {role.role === "user" ? (
          <button className="btn" onClick={handleAddToCart}>
            <ShoppingCartOutlined />
          </button>
        ) : (
          <button style={{ display: "none" }}></button>
        )}
      </div>
    </>
  );
}

export default Book;
