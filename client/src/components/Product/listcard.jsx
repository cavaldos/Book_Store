import React, { useEffect, useState } from "react";
import axios from "axios";
import "./listcard.scss";
import {Books} from "../../pages/Home/book/book";
export default function ListCardProduct(props) {
  const { genre } = props;

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios

      .post(`${process.env.REACT_APP_API_PORT}/getbookbygenre`, {
        genre: genre,
      })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [genre]);
  // console.log("genre", products);
  return (
    <>
      <div className="productcontainer"
        style={{
          margin: "0 5px",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          textAlign: "center",
          height: "350px",
          overflowX: "auto",
          padding: "0 240px",
        }}
      >
        {products.map(
          (
            { ID, Image, Tittle, Author, Rating, Price, Description, _id },
            index
          ) => (
            <Books
              key={index}
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
      </div>
    </>
  );
}
