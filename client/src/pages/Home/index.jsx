import "./home.scss";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import Book from "./book/book";
import { Spin, Pagination, Carousel, Select } from "antd";
import Poster from "./poster";


function Home() {
  const [products, setProducts] = useState([]);
  const [topRatedProducts, setTopRatedProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const [totalPages, setTotalPages] = useState(1);
  const [pageNumbers, setPageNumbers] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('All');

  useEffect(() => {
    fetchProducts();
  }, [currentPage, pageSize, selectedGenre]);

  const fetchProducts = () => {
    const url = `${process.env.REACT_APP_API_PORT}/getallbooks?page=${currentPage}&pageSize=${pageSize}&genre=${selectedGenre}`;
    console.log(selectedGenre);
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

  // Add the pagination controls
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };
  const handleFilterChange = (value) => {
    setSelectedGenre(value);
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
        <div className="filter">
          <Select
            defaultValue="all"
            style={{ width: 200 }}
            onChange={handleFilterChange}
            options={[
              { value: 'All', label: 'All' },
              { value: 'Art-Photography', label: 'Art Photography' },
              { value: 'Biography', label: 'Biography' },
              { value: 'Business-Finance-Law', label: 'Business, Finance, Law' },
              { value: 'Childrens-Books', label: 'Childrens Books' },
              { value: 'Computing', label: 'Computing' },
              { value: 'Crime-Thriller', label: 'Crime Thriller' },
              { value: 'Dictionaries-Languages', label: 'Dictionaries Languages' },
              { value: 'Entertainment', label: 'Entertainment' },
              { value: 'Medical', label: 'Medical' },
              { value: 'Science-Geography', label: 'Science Geography' },
            ]}
          />
        </div>
        <div className="home-container_5 con">  
        {products.map(
          ({ ID, Image, Tittle, Author, Rating, Price, Description, _id, Genre }) => {
            if (selectedGenre === 'All' || Genre === selectedGenre) {
              return (
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
              );
            }
            return null;
    }
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
