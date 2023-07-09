import React from 'react';
import './styles.scss';
import Product from './Product';
import { useState } from 'react';
import { useSelector } from 'react-redux';
function Cart() {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    const a = storedProducts.length;
    // const price = storedProducts.map((product) => Number(product.price));

    const pay_product = useSelector((state) => state.payment);

    const number = pay_product.quantity;
    const price = pay_product.price;
    console.log(typeof pay_product);
    console.log(pay_product);

    return (
        <>
            <div className="list-product">
                <div className="header-product">
                    <h5 className="title mar">Product</h5>
                    <h5 className="quantity mar">Quantity</h5>
                    <h5 className="price mar">Price</h5>
                    <h5 className="remove mar">Remove</h5>
                </div>
                {storedProducts.map((product, index) => (
                    <Product
                        key={index}
                        name={product.name}
                        quantity={product.quantity}
                        price={product.price}
                        image={product.image}
                        id={product.id}
                    />
                ))}
            </div>
            <div className="pay">
                <h3>Total: ${1}</h3>
            </div>
        </>
    );
}

export default Cart;
