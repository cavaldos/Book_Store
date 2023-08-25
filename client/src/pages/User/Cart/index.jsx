import React, { useState, useEffect } from "react";
import "./styles.scss";
import Product from "./Product";
import { useSelector, useDispatch } from "react-redux";
import { createPayment } from "../../redux/features/paymentSlice";
import { message } from "antd";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
function Cart() {
  const [cart, setCart] = useState([]);
  const orders = useSelector((state) => state.order);

  const payment = useSelector((state) => state.payment);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const orderCode = uuidv4();
  useEffect(() => {
    setCart(orders);
  }, [orders]);
  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );
  const handlePay = () => {
    if (cart.length === 0) {
      message.error("Please add product to cart");
      return;
    }
    if (payment.orderDetails !== "") {
      message.success("You already have an order in progress");
    }
    const orderDetails = cart.map((item) => {
      return {
        id_book: item.id,
        _id: item._id,
        title: item.title,
        price: item.price,
        image: item.image,
        description: item.description,
        quantity: item.quantity,
      };
    });
    const payload = {
      orderDetails,
      email_user: user.email,
      currentStep: 0,
      id_payment: orderCode,
      total: totalPrice,
    };
    dispatch(createPayment(payload));
    setTimeout(() => {
      navigate("/user/cart/payment");
    }, 400);
  };
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
          onClick={handlePay}
        >
          Pay
        </button>
      </div>
    </>
  );
}

export default Cart;
