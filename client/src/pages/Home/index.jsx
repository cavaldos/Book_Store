import '../../components/layout/book/index.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from '../../components/layout/book/book';
import { Spin } from 'antd';

// import { useSelector } from 'react-redux';

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
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, [!products]);
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
                            ></Book>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

export default Home;
//  <Book
//      title="datastrcut"
//      price="10"
//      rate="3"
//      author="khanh"
//      image="https://images.unsplash.com/photo-1688149571284-ba299c1a247e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1634&q=80"
//  />;
