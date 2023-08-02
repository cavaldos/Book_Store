import React from 'react';
import './styles.scss';
import Product from './Product';
import { useState } from 'react';
import { useSelector } from 'react-redux';
function Cart() {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    const a = storedProducts.length;
    // const price = storedProducts.map((product) => Number(product.price));
    const calculateTotalQuantity = (products) => {
        return products.reduce((total, product) => {
            return total + product.quantity;
        }, 0);
    };
    const calculateTotal = (products) => {
        const totalQuantity = calculateTotalQuantity(products);
        const totalPrice = products.reduce((total, product) => {
            return total + product.price * product.quantity;
        }, 0);
        return {
            totalQuantity,
            totalPrice,
        };
    };
    const pay_product = useSelector((state) => state.payment);
    const { totalQuantity, totalPrice } = calculateTotal(pay_product.products);

    console.log('state', pay_product);

    let currentState = localStorage.getItem('products');
    currentState = currentState ? JSON.parse(currentState) : [];
    console.log('curentstatr', currentState);
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
            <div className="pay" style={{ minHeight: '100px' }}>
                <h3>Total: ${totalPrice}</h3>
                <button
                    style={{
                        position: 'absolute',
                        bottom: '0px',
                        height: '50px',
                        width: '100%',
                  
                      
                    }}
                >
                    pay
                </button>
            </div>
        </>
    );
}

export default Cart;
