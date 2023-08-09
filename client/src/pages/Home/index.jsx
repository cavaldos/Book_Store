import './book/book.scss';
import { Carousel } from "antd";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from './book/book';
import { Spin } from 'antd';
import { Select } from 'antd';
import Fillter from './fillter/fillter';

const categories = ['all', 'noval', 'math', 'anime'];
const options = [];
for (let i = 10; i < categories.length; i++) {
    options.push({
        value: categories[i],
        label: categories[i],
    });
}
const handleChange = (value) => {
    console.log(options);
    console.log(`selected ${value}`);
};

function Home() {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [topRatedProducts, setTopRatedProducts] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [pageNumbers, setPageNumbers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(12);
    

  useEffect(() => {
    fetchProducts();
  }, [currentPage, pageSize]);

  const fetchProducts = () => {
    const url = `http://localhost:8001/getallbooks?page=${currentPage}&pageSize=${pageSize}`;
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
      .get("http://localhost:8001/gettopbooks")
      .then((response) => {
        setTopRatedProducts(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(topRatedProducts);

  // Add the pagination controls
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // Select all the checkbox elements
  const checkedboxes = document.querySelectorAll('input[type="checkbox"]');

  // Loop through each checkbox element
  checkedboxes.forEach(checkbox => {
  // Check if the checkbox state is stored in the browser storage
  if (localStorage.getItem(checkbox.id) === 'true') {
    checkbox.checked = true;
  }

  // Add an event listener to the checkbox to store its state in the browser storage
  checkbox.addEventListener('change', () => {
    localStorage.setItem(checkbox.id, checkbox.checked);
  });
  });





  // Function to handle checkbox change event
  function handleCheckboxChange() {
    // Get all the checked checkboxes for each category
    var genreCheckboxes = Array.from(document.querySelectorAll('input[name="genre"]:checked'));
    var rateCheckboxes = Array.from(document.querySelectorAll('input[name="rate"]:checked'));
    var priceCheckboxes = Array.from(document.querySelectorAll('input[name="price"]:checked'));

    // Create an array to store the selected values
    var filter = {
      Id: 1,
      Genre: [],
      Rate: [],
      Price: []
    };
    
    // Add the selected genre values to the filter array
    genreCheckboxes.forEach(function (checkbox) {
      filter.Genre.push(checkbox.value);
    });
    
    // Add the selected rate values to the filter array
    rateCheckboxes.forEach(function (checkbox) {
      filter.Rate.push(checkbox.value);
    });
    
    // Add the selected price values to the filter array
    priceCheckboxes.forEach(function (checkbox) {
      filter.Price.push(checkbox.value);
    });

    console.log(filter);
    
  }


  // Attach event listeners to the checkboxes
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', handleCheckboxChange);
  });


  return (
    <>
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
        <div id ='CheckType'>GENRE</div> <ul id="choice_filter">
        <li><label><input type="checkbox" name="genre" value="Art-Photography" id="c1"/> Art-Photography</label></li>
        <li><label><input type="checkbox" name="genre" value="Biography" id="c2"/> Biography</label></li>
        <li><label><input type="checkbox" name="genre" value="Business-Finance-Law" id="c3"/> Business-Finance-Law</label></li>
        <li><label><input type="checkbox" name="genre" value="Childrens-Books" id="c4"/> Childrens-Books</label></li>
        <li><label><input type="checkbox" name="genre" value="Computing" id="c5"/> Computing</label></li> 
        <li><label><input type="checkbox" name="genre" value="Crime-Thriller" id="c6"/> Crime-Thriller</label></li> 
        <li><label><input type="checkbox" name="genre" value="Dictionaries-Languages" id="c7"/> Dictionaries-Languages</label></li> 
        <li><label><input type="checkbox" name="genre" value="Entertainment" id="c8"/> Entertainment</label></li>
        <li><label><input type="checkbox" name="genre" value="Medical" id="c9"/> Medical</label></li>
        <li><label><input type="checkbox" name="genre" value="Science-Geography" id="c10"/> Science-Geography</label></li>
        
        </ul>
        <hr id='sperate_line'/>
        
        <div id ='CheckType'>RATING</div>
        <ul id='choice_filter'>
          <li><label><input type="checkbox" name="rate" value="3" id="c11"/> 3</label></li>
          <li><label><input type="checkbox" name="rate" value="3.5" id="c12"/>  3.5</label></li>  
          <li><label><input type="checkbox" name="rate" value="4" id="c13"/> 4</label></li>
          <li><label><input type="checkbox" name="rate" value="4.5" id="c14"/>  4.5</label></li>
          <li><label><input type="checkbox" name="rate" value="5" id="c15"/> 5</label></li>
        </ul>
      
        <hr id='sperate_line'/>

        <div id ='CheckType'>PRICE</div>

        <ul id='choice_filter'>
        <li><label><input type="checkbox" name="price" value="0-10$" id="c16"/> 0-10$</label></li>  
        <li><label><input type="checkbox" name="price" value="10-20$" id="c17"/> 10-20$</label></li>  
        <li><label><input type="checkbox" name="price" value="20-30$" id="c18"/> 20-30$</label></li>
        <li><label><input type="checkbox" name="price" value=">30-50$" id="c19"/> 30-50$</label></li>
        </ul>
          {/* <PayPalCheckoutButton /> */}
        </div>
        <div className="home-container_6 con">
          Sort by:  
        <select id="select_option">
          <option value="option1"> Title</option>
          <option value="option2"> Rate</option>
          <option value="option3"> Price</option>
        </select>
        </div>
        <div className="home-container_4 con"></div>
        <div className="home-container_5 con">
          {products.map(
            ({ ID, Image, Tittle, Author, Rating, Price, Description, ISBN, Genre, Publish_Year, Publisher}) => (
              <Book
                key={ID}
                id={ID}
                image={Image}
                title={Tittle}
                author={Author}
                price={Price}
                rate={Rating}
                description={Description}
                isbn={ISBN}
                genre={Genre}
                publish_year={Publish_Year}
                publisher={Publisher}
              />
            )
          )}
          <div className="pagination-container">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="control"
            >
              {"<"}
            </button>
            <div className="page-number-container">
              {pageNumbers.map((pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  disabled={currentPage === pageNumber}
                  className={currentPage === pageNumber ? "active" : ""}
                >
                  {pageNumber}
                </button>
              ))}
            </div>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="control"
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
