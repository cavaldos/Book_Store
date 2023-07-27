import "./book/index.scss";
import "./home.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Book from "./book/book";
import { Spin } from "antd";
import { Select, Pagination } from "antd";
import Fillter from "./fillter/fillter";
import Product from "../Cart/Product";
import { Carousel } from "antd";

function Home() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setTotalPages(Math.ceil(response.data.length / pageSize));
      })
      .catch((error) => console.log(error));
  }, [pageSize]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const lastIndex = currentPage * pageSize;
  const firstIndex = lastIndex - pageSize;
  const currentProducts = products.slice(firstIndex, lastIndex);

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
        <div className="home-container_5 con">
          <div className="book-container">
            <Book products={currentProducts} />
          </div>
          <div className="pagination-container">
            <Pagination
              total={totalPages}
              pageSize={pageSize}
              current={currentPage}
              onChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
