import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "antd";
import Rating from "@mui/material/Rating";
import { useSelector, useDispatch } from "react-redux";
import "./detail.scss";
import { message } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { addToCart } from "..//..//redux//features//orderSlice";
const { Text, Title, H } = Typography;

function Detailbook(props) {
  const [idp, setIdp] =  useState(useParams().id);
  console.log("sf",props);
  const [data, setData] = useState([]);
  const orders = useSelector((state) => state.order);
  const role = useSelector((state) => state.role);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(`${process.env.REACT_APP_API_PORT}/${idp}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idp]);
  console.log("safdasf",data);
  const handleAddToCart = (event) => {
    event.preventDefault(); // Empêche le rechargement de la page
    const existingOrder = orders.find((order) => order.id === data.ID);
    if (existingOrder) {
      message.warning("Product already exists");
      return;
    } else {
      let newOrder = {
        id:data.ID,
        image:data.Image,
        title:data.Tittle,
        author:data.Author,
        rate:data.Rating,
        price:data.Price,
        description:data.Description,
        _id:data._id,
      };
      dispatch(addToCart(newOrder));
      message.success("Product added to cart successfully");
    }
  };
  return (
    <>
      <div className="grid-container">
        <form id="f1">
          <div>
            <img src={data.Image} alt={data.Tittle} />
          </div>
        </form>
        <form id="f2">
          <Rating value={parseFloat(data.Rating)} precision={0.5} readOnly />
          <h1>{data.Tittle}</h1>
          <p id="price_info">$ {data.Price}</p>
          <p id="auth">By: {data.Author}</p>
          <br />
          <p>
            <span id="cate">Description:</span> {data.Description}
          </p>
          <br />
          <hr />
          <br />
          <div id="more_info">
            <p id="lineinfo">
              <span id="cate">ISBN:</span> {data.ISBN}
            </p>
            <p id="lineinfo">
              <span id="cate">Genre:</span> {data.Genre}
            </p>
            <p id="lineinfo">
              <span id="cate">Publish Year:</span> {data.Publish_Year}
            </p>
            <p id="lineinfo">
              <span id="cate">Publisher:</span> {data.Publisher}
            </p>
          </div>
          <div id="add-cart">
            {role.role === "user" ? (
              <button id="button_info" onClick={handleAddToCart}>
                Add to Cart <ShoppingCartOutlined />
              </button>
            ) : (
              <button style={{ display: "none" }}></button>
            )}
            <hr id="line_add" />
            <div id="img_truck">
              {/* <img id="truckicon" src="/truckicon.jpg" alt="Truck Icon" /> */}
              <span id="ship_text">Arrived in 2 days</span>
            </div>
            <hr id="line_add" />
          </div>
        </form>
        <div>
        sadfsdfsadfasd
        </div>
      </div>
    </>
  );
}

export default Detailbook;
