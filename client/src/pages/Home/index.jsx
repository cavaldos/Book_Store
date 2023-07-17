import './book/index.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from './book/book';
import { Spin } from 'antd';

import { useSelector } from 'react-redux';


function Home() {
    const [loading, setLoading] = useState(false);

    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios
            .get('https://fakestoreapi.com/products')
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
            )}
        </>
    );
}

export default Home;
