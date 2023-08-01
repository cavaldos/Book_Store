import React, { Fragment } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./ConfirmOrder.scss"
import { useSelector } from 'react-redux';


import CheckoutSteps from '../../components/checkoutstep/CheckoutSteps'

const ConfirmOrder = () => {
    const history = useNavigate();
    const shippingInfo = useSelector((state) => state.shipping);

    // const { cartItems, shippingInfo } = useSelector(state => state.cart)
    // const { user } = useSelector(state => state.auth)

    // Calculate Order Prices
    // const itemsPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    // const shippingPrice = itemsPrice > 200 ? 0 : 25
    // const taxPrice = Number((0.05 * itemsPrice).toFixed(2))
    // const totalPrice = (itemsPrice + shippingPrice + taxPrice).toFixed(2)

    const processToPayment = () => {
        // const data = {
        //     itemsPrice: itemsPrice.toFixed(2),
        //     shippingPrice,
        //     taxPrice,
        //     totalPrice
        // }

        // sessionStorage.setItem('orderInfo', JSON.stringify(data))
        history('/payment')
    }

    return (
        <Fragment>

            <CheckoutSteps confirmOrder />

            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ flex: "1 1 100%", maxWidth: "100%" }}>
                    <h4 style={{ marginBottom: "3px" }}>Shipping Info</h4>
                    {/* <p><b>Name:</b> {user && user.name}</p> */}
                    <p><b>Phone:</b> {shippingInfo.phoneNo}</p>
                    <p style={{ marginBottom: "4px" }}><b>Address:</b> {`${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.postalCode}, ${shippingInfo.country}`}</p>
                    <hr style={{ margin: "16px 0" }} />
                    <h4 style={{ marginTop: "16px" }}>Your Cart Items:</h4>

                    {/* {cartItems.map(item => (
                        <Fragment>
                            <hr style={{ margin: "16px 0" }} />
                            <div className="cart-item my-1" key={item.product}>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <img src={item.image} alt="Laptop" height="45" width="65" style={{ marginRight: "10px" }} />
                                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                                    <div style={{ marginLeft: "auto", marginTop: "4px" }}>
                                        <p>{item.quantity} x ${item.price} = <b>${(item.quantity * item.price).toFixed(2)}</b></p>
                                    </div>
                                </div>
                            </div>
                            <hr style={{ margin: "16px 0" }} />
                        </Fragment>
                    ))} */}
                </div>

                <div style={{ flex: "0 0 25%", margin: "16px 0" }}>
                    <div id="order_summary">
                    <h4>Order Summary</h4>
                    <hr style={{ margin: "16px 0" }} />
                    {/* <p>Subtotal:  <span style={{ display: "inline-block" }}>${itemsPrice}</span></p>
                    <p>Shipping: <span style={{ display: "inline-block" }}>${shippingPrice}</span></p>
                    <p>Tax:  <span style={{ display: "inline-block" }}>${taxPrice}</span></p> */}
                    <hr style={{ margin: "16px 0" }} />
                    {/* <p>Total: <span style={{ display: "inline-block" }}>${totalPrice}</span></p> */}
                    <hr style={{ margin: "16px 0" }} />
                    <button style={{ width: "100%" }} id ="checkout_btn" className="btn btn-primary" onClick={processToPayment}>Proceed to Payment</button>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default ConfirmOrder