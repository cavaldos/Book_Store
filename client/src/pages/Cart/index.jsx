import React, { useState, useEffect } from "react";
import "./styles.scss";
import Product from "./Product";
import { useSelector } from "react-redux";


function Cart() {
  const [cart, setCart] = useState([]);
  const orders = useSelector((state) => state.order);
  useEffect(() => {
    setCart(orders);
  }, [orders]);
  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );
  return (
    <>
      <div className="list-product">
        <div className="header-product">
          <h5 className="title mar">Product</h5>
          <h5 className="quantity mar">Quantity</h5>
          <h5 className="price mar">Price</h5>
          <h5 className="remove mar">Remove</h5>
        </div>
        {cart.map(({ id, image, title, author, rate, price, description }) => (
          <Product
            key={id}
            id={id}
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
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
        <button
          style={{
            position: "absolute",
            bottom: "0px",
            height: "50px",
            width: "100%",
          }}
        >
          Pay
        </button>
      </div>
    </>
  );
}

export default Cart;
