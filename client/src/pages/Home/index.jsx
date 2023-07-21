import "./book/index.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Book from "./book/book";
import { Spin } from "antd";
import { Select } from "antd";
import Fillter from "./fillter/fillter";
// using dotenv
const categories = ["all", "noval", "math", "anime"];
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
console.log(process.env.PORT);
function Home() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const handle = () => {};
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);
  //check loading
  useEffect(() => {
    setLoading(true);
    const hasProducts = !!products;
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [products]);
  return (
    <>
      {loading ? (
        <div className="loading">
          <Spin size="large" />
        </div>
      ) : (
        <>
          <div className="option">
            <div className="select">
              <span style={{ margin: "10px" }}>Category :</span>
              <Select
                mode="tags"
                style={{
                  width: "30%",
                }}
                onChange={handleChange}
                tokenSeparators={[","]}
                options={options}
              />
            </div>
            <div className="fillter">{/* <Fillter /> */}</div>
          </div>
          <div className="product-container">
            {products.map((product) => (
              <div key={product.id} className="product-item">
                <Book
                  title={product.title}
                  price={product.price}
                  rate={product.rating.rate}
                  image={product.image}
                  id={product.id}
                  quantity={0}
                ></Book>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default Home;
