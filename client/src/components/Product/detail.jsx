import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "antd";

import "./detail.scss";
import { Space, Card, Rate } from "antd";
const { Text, Title, H } = Typography;

function Detailbook(props) {
  const id = useParams().id;
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/${id}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  console.log(data);
  const rate = data.Rating;
  const handleAddToCart = () => {};
  return (
    <>
      <div className="detailbook">
        <div className="product_image">
          <img src={data.Image} alt={data.Tittle} />
        </div>
        <div className="detailbook_content">
          <h1 className="title">{data.Tittle}</h1>
          <p className="price">$ {data.Price}</p>
          <Text className="author" underline>
            By: {data.Author}
          </Text>
          <p className="description">Description:{data.Description}</p>
          <Rate disabled defaultValue={4} />
          <br />
          <button className="btn">Add to cart</button>
          <br />
          <p className="publich_year">Publish_Year:{data.Publish_Year}</p>
          <br />
          <p className="genre">Genre:{data.Genre}</p>
          <br />
          <p className="publisher">Publisher :{data.Publisher}</p>
        </div>
      </div>
    </>
  );
}

export default Detailbook;