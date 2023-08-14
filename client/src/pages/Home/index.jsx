import "./home.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Book from "./book/book";
import { Spin, Pagination } from "antd";
import { Select } from "antd";
import Fillter from "./fillter/fillter";
import { Col, Row } from "antd";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const imageArray = [
  'https://thumbs.dreamstime.com/z/banner-online-book-store-book-shelf-bookcase-background-98059504.jpg?w=992',
  'https://bookmarketinggraphics.com/wp-content/uploads/2015/12/WOD-Promo.jpg',
  'https://img.haikudeck.com/r/ed108fbc-82ce-4f6f-8fe.jpg?rasterSignature=463388fa7c04c2e38b2acfa80279028f&theme=Illuminati&imageFilter=false',
  'https://i.pinimg.com/originals/05/a4/ca/05a4cac6953fed0c2c835324f3fdf92d.jpg',
  'https://i0.wp.com/ebookfriendly.com/wp-content/uploads/2014/05/Norlis-Bookstore-Unplug-with-a-book-Instagram.jpg?w=1740&ssl=1',
  'https://i0.wp.com/ebookfriendly.com/wp-content/uploads/2014/05/Norlis-Bookstore-Unplug-with-a-book-Angry-Birds.jpg?w=1740&ssl=1',
  'https://i0.wp.com/ebookfriendly.com/wp-content/uploads/2014/05/Book-ad-Burn-after-reading.jpg?w=980&ssl=1',
  'https://i0.wp.com/ebookfriendly.com/wp-content/uploads/2014/05/Norlis-Bookstore-Unplug-with-a-book-Facebook.jpg?w=1740&ssl=1',
  'https://i0.wp.com/ebookfriendly.com/wp-content/uploads/2014/05/Norlis-Bookstore-Unplug-with-a-book-Twitter.jpg?w=1740&ssl=1',
  'https://i0.wp.com/ebookfriendly.com/wp-content/uploads/2014/05/Ads-for-bookstores-Read-Yourself-Interesting-Boardroom.jpg?w=1240&ssl=1',
  'https://i0.wp.com/ebookfriendly.com/wp-content/uploads/2014/05/A-book-can-change-the-story-of-your-life-ad-4.jpg?w=1740&ssl=1',
  'https://i0.wp.com/ebookfriendly.com/wp-content/uploads/2014/05/Ads-for-bookstores-Read-Yourself-Interesting-Bar.jpg?w=1240&ssl=1',
];

function Home() {
  const [products, setProducts] = useState([]);
  // const [topRatedProducts, setTopRatedProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const [totalPages, setTotalPages] = useState(1);
  const [pageNumbers, setPageNumbers] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, [currentPage, pageSize]);

  const fetchProducts = () => {
    const url = `http://localhost:8000/getallbooks?page=${currentPage}&pageSize=${pageSize}`;
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
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/gettopbooks")
  //     .then((response) => {
  //       setProducts(response.data);
  //       setTopRatedProducts(response.data);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);
  
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
        <div className="carousel-container">
          <Carousel autoPlay={true} interval={3000} infiniteLoop={true}>
            {imageArray.map((imagePath, index) => (
              <div key={index}>
                <img src={imagePath} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </Carousel>
        </div>
       
        <div className="home-container_5 con">
          <h1>YOU MAY ALSO LIKE</h1>
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