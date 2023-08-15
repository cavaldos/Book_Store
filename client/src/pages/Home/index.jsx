import "./home.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Book from "./book/book";
import { Spin, Pagination } from "antd";
import { Select } from "antd";
import Fillter from "./fillter/fillter";
import Product from "../User/Cart/Product";
import { Carousel } from "antd";
import { Col, Row } from "antd";

function Home() {
  const [products, setProducts] = useState([]);
  const [topRatedProducts, setTopRatedProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const [totalPages, setTotalPages] = useState(1);
  const [pageNumbers, setPageNumbers] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, [currentPage, pageSize]);

  const fetchProducts = () => {
    const url = `${process.env.REACT_APP_API_PORT}/getallbooks?page=${currentPage}&pageSize=${pageSize}`;
    axios
      .get(url)
      .then((response) => {
        setProducts(response.data.books);
        setTotalPages(response.data.totalPages);
        // Generate an array of page numbers [1, 2, 3, ..., totalPages]
        setPageNumbers(
          Array.from({ length: response.data.totalPages }, (_, i) => i + 1)
        );
      })
      .catch((error) => console.log(error));
  };
  //get top book
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_PORT}/gettopbooks`)
      .then((response) => {
        setProducts(response.data);
        setTopRatedProducts(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  // console.log(topRatedProducts);
  // Add the pagination controls
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <>
      {/* <div className="home">
        <div className="poster one">
          <Carousel className="carousel" autoplay>
            <img></img>
          </Carousel>
        </div>
        <div className="fillter one">sdf</div>
        <div className="content one">dsf</div>
      </div> */}
      <div className="home">
        <div className="home-container_2 con">
          <Carousel className="carousel" autoplay>
            {topRatedProducts.map(({ ID, Image, Tittle }) => (
              <div key={ID} className="car-contens">
                Top Book
                <img className="pic" src={Image} alt={Tittle} />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="home-container_1 con">
          <Carousel className="carousel" autoplay>
            {topRatedProducts.map(({ ID, Image, Tittle }) => (
              <div key={ID} className="car-contens">
                Daily recommended book
                <img className="pic" src={Image} alt={Tittle} />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="home-container_3 con">fillter</div>
        <div className="home-container_6 con">Sort</div>
        <div className="home-container_4 con"></div>
        <div className="home-container_5 con">
          {products.map(
            ({
              ID,
              Image,
              Tittle,
              Author,
              Rating,
              Price,
              Description,
              _id,
            }) => (
              <Book
                key={ID}
                id={ID}
                image={Image}
                title={Tittle}
                author={Author}
                price={Price}
                rate={Rating}
                description={Description}
                _id={_id}
              />
            )
          )}
          <div className="pagination-container">
            <Pagination
              current={currentPage}
              pageSize={pageSize}
              total={totalPages * pageSize}
              onChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

/*
<div className="home">
<div className="home-container_2 con">
          <Carousel className="carousel" autoplay>
            {topRatedProducts.map(({ ID, Image, Tittle }) => (
              <div key={ID} className="car-contens">
                Top Book
                <img className="pic" src={Image} alt={Tittle} />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="home-container_1 con">
          <Carousel className="carousel" autoplay>
            {topRatedProducts.map(({ ID, Image, Tittle }) => (
              <div key={ID} className="car-contens">
                Daily recommended book
                <img className="pic" src={Image} alt={Tittle} />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="home-container_3 con">
          fillter
    
        </div>
        <div className="home-container_6 con">Sort</div>
        <div className="home-container_4 con"></div>
        <div className="home-container_5 con">
          {products.map(
            ({ ID, Image, Tittle, Author, Rating, Price, Description,_id }) => (
              <Book
                key={ID}
                id={ID}
                image={Image}
                title={Tittle}
                author={Author}
                price={Price}
         
                rate={Rating}
                description={Description}
                _id={_id}
              />
            )
          )}
          <div className="pagination-container">
            <Pagination
              current={currentPage}
              pageSize={pageSize}
              total={totalPages * pageSize}
              onChange={handlePageChange}
            />
          </div>
        </div>
</div>


*/
