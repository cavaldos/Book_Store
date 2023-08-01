import React from "react";
import "./styles.scss";
import Product from "./Product";
import { useState, useEffect } from "react";

function Cart() {
  const [cart, setCart] = useState([]);

  function getCartData() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    return cart;
  }
  useEffect(() => {
    const cartData = getCartData();
    setCart(cartData);
  }, []);

  console.log("cart", cart);
  // rest of the component code
  return (
    <>
      <div className="list-product">
        <div className="header-product">
          <h5 className="title mar">Product</h5>
          <h5 className="quantity mar">Quantity</h5>
          <h5 className="price mar">Price</h5>
          <h5 className="remove mar">Remove</h5>
        </div>
        {cart.map(({ image, title, author, rate, price,description }) => (
          <Product
            key={title}
            image={image}
            title={title}
            author={author}
            rate={rate}
            price={price}
            description={description}
          />
        ))}
      </div>
      <div className="pay" style={{ minHeight: "100px" }}>
        <h3>Total: $40</h3>
        <button
          style={{
            position: "absolute",
            bottom: "0px",
            height: "50px",
            width: "100%",
          }}
        >
          pay
        </button>
      </div>
    </>
  );
}

export default Cart;
