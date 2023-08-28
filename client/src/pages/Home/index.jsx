import "./home.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Book } from "./book/book";
import { Spin, Pagination, Carousel, Select } from "antd";

import Poster from "./poster";

function Home() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const [totalPages, setTotalPages] = useState(1);
  const [pageNumbers, setPageNumbers] = useState([]);
  const [genre, setGenre] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_PORT}/getgenre`)
      .then((res) => {
        setGenre(res.data);
        console.log("genre", genre);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleGenreChange = (value) => {
    console.log(`selected ${value}`);
    setSelectedGenre(value);
    console.log(`selected ${value}`);
    axios

      .post(`${process.env.REACT_APP_API_PORT}/getbookbygenre`, {
        genre: value,
      })
      .then((res) => {
        setProducts(res.data);
        console.log("genre", genre);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <>
      <div className="home">
        <Carousel id="carousels" autoplay>
          <div>
            <Poster src={"./img/poster1.png"} />
          </div>
          <div>
            <Poster src={"./img/poster2.png"} />
          </div>
          <div>
            <Poster src={"./img/poster3.png"} />
          </div>
        </Carousel>
        <div className="horizontal-line"></div>
        <Select
          mode="single"
          placeholder="Select a genre"
          style={{
            width: "300px",
            margin: "0 auto",
            display: "block",
            borderRadius: "4px",
            border: "2px solid #1890ff",
          }}
          options={[
            //{ value: "all", label: "All" }, // Thêm một tùy chọn "All"
            ...[...new Set(genre)].map((item) => ({
              value: item,
              label: item,
            })),
          ]}
          value={selectedGenre}
          onChange={handleGenreChange}
          allowClear={true} // Cho phép bỏ chọn thể loại
        />
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
