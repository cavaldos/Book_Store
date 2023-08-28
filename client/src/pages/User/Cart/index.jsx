import React, { useState, useEffect } from "react";
import "./styles.scss";
import Product from "./Product";
import { useSelector, useDispatch } from "react-redux";
import { createPayment } from "../../../redux/features/paymentSlice";
import { message, Space, Card, Button } from "antd";
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
        _id: item._id,
        id_book: item.id,
        title: item.title,
        price: item.price,
        image: item.image,
        description: item.description,
        quantity: item.quantity,
      };
    });
    const payload = {
      orderDetails,
      email: user.email,
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

      <Space
        style={{
          backgroundColor: "#f0f2f5",
          minHeight: "100px",
          maxWidth: "500px",
          margin: "0 auto",
          minWidth: "500px",
          borderRadius: "5px",
          border: "1px solid #d9d9d9",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          padding: "0 0 10px 0",
        }}
        align="center"
      >
        <Space
          style={{
            display: "flex",
            minHeight: "100px",
            minWidth: "500px",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Card
            style={{
              width: 300,
              margin: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
          </Card>
        </Space>
        <Button style={{ float: "right" }} type="primary" onClick={handlePay}>
          PAY
        </Button>
      </Space>
    </>
  );
}

export default Cart;
