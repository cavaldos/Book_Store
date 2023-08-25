import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "antd";
import Rating from '@mui/material/Rating';
import InfoBook from "../../pages/Home/book/infobook";


import "./detail.scss";
import { Space, Card, Rate } from "antd";
const { Text, Title, H } = Typography;

function Detailbook(props) {
  const id = useParams().id;
  const [data, setData] = useState([]);
  const [relatedBooks, setRelatedBooks] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8001/${id}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  
  console.log(data);

  useEffect(() => {
    const fetchRelatedBooks = async () => {
      try {
        const bookId = id;
        const response = await axios.get(`http://localhost:8001/relatedbook/${bookId}`);
        const data = response.data.data;
        setRelatedBooks(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRelatedBooks();
  }, []);

  const handleAddToCart = () => {};
  return (
    <>
      <div class="grid-container">
        <form id="f1"><div><img src={data.Image} alt={data.Tittle} /></div></form>
        <form id="f2">
          <Rating value={parseFloat(data.Rating)} precision={0.5} readOnly />
          <h1>{data.Tittle}</h1>
          <p id="price_info">$ {data.Price}</p>
          <p id="auth">By: {data.Author}</p>
          <br />
          <p><span id="cate">Description:</span> {data.Description}</p>
          <br /><hr /><br />
          <div id="more_info">
            <p id="lineinfo"><span id="cate">ISBN:</span> {data.ISBN}</p>
            <p id="lineinfo"><span id="cate">Genre:</span> {data.Genre}</p>
            <p id="lineinfo"><span id="cate">Publish Year:</span> {data.Publish_Year}</p>
            <p id="lineinfo"><span id="cate">Publisher:</span> {data.Publisher}</p>
          </div>
          <div id="add-cart">
            <button id="button_info">Add to Cart</button>
            <hr id="line_add"/>
            <div id="img_truck">
              <img id="truckicon" src="/truckicon.jpg" alt="Truck Icon" />
              <span id="ship_text">Arrived in 2 days</span>
            </div>
            <hr id="line_add"/>
          </div>
        </form>
      </div>
    <hr id="rel" />
      <div className="related-books-section">
        <Title level={4} id="Related">RELATED BOOKS</Title>
        <div className="related-books-grid">
          {relatedBooks.map((book) => (
            <Card key={book.id} className="related-book-card">
              <div id="Stack">
                <img src={book.Image} alt={book.Title} />
                <InfoBook id={book._id} />
              </div><br />
              <Text id="Title_related">{book.Tittle}</Text>  <br />
              <Rating value={parseFloat(book.Rating)} precision={0.5} readOnly /> <br />
              <Text id="Author_related">{book.Author}</Text>
            </Card>
          ))}
        </div>
      </div>

    </>
  );
}

export default Detailbook;
