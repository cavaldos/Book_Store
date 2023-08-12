import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "antd";
import Rating from '@mui/material/Rating';

import "./detail.scss";
import { Space, Card, Rate } from "antd";
const { Text, Title, H } = Typography;

function Detailbook(props) {
  const id = useParams().id;
  const [data, setData] = useState([]);
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
      <button id="button_info">Add to Cart</button>
      </form>
    </div>
    </>
  );
}

export default Detailbook;
