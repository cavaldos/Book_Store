import "./book/index.scss";
import "./home.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Book from "./book/book";
import { Spin } from "antd";
import { Select } from "antd";
import Fillter from "./fillter/fillter";
import Product from "../Cart/Product";
import { Carousel } from "antd";

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products ")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  console.log(products);

  return (
    <>
      <div className="home">
        <div className="home-container_1 con">sort</div>
        <div className="home-container_2 con">
          <Carousel className="carousel" autoplay>
            <div className="car-contens">
              <div className="pic">easdf</div>
            </div>
            <div className="car-contens">
              <div className="pic">esdf</div>
            </div>
            <div className="car-contens">
              <div className="pic">esdf</div>
            </div>

            <div className="car-contens">
              <div className="pic">esdfsdfsd</div>
            </div>
          </Carousel>
        </div>
        <div className="home-container_3 con">fillter</div>
        <div className="home-container_4 con">quang cao</div>
        <div className="home-container_5 con">hien thi san pham</div>
      </div>
    </>
  );
}

export default Home;
