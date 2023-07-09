import React from 'react';
import './styles.scss';
import Product from './Product';
import { useState } from 'react';

function Cart() {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];

    // const price = storedProducts.map((product) => Number(product.price));

    // //cách lấy ra từng giá trị trong price
    // const total = price.reduce((a, b) => a + b, 0);
    // console.log(total);

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
