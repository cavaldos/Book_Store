import './index.scss';
import style from './styles';
import React from 'react';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Rating from '@mui/material/Rating';
import { message } from 'antd';


function Book(props) {
    const { id, title, price, description, image, rate } = props;
    const product = { id, title, price, description, image, rate };

    // const MongoClient = require('mongodb').MongoClient;
    // const url = 'mongodb://localhost:27017';
    // const dbName = 'book';
    // MongoClient.connect(url, function(err, client) {
    //     console.log('Connected successfully to server');
    //     const myProduct =
    //     JSON.parse(localStorage.getItem('products')) || [];
        
    //     const collection = db.collection('book');
    //     collection.insertOne(myProduct, function(err, result) {
    //         console.log('Data inserted into collection');
    //         client.close();
    //     });
    // });
    const handleClick = () => {
        const storedProducts =
            JSON.parse(localStorage.getItem('products')) || [];

        const existingProduct = storedProducts.find(
            (productInCart) => productInCart.id === product.id,
        );

        if (existingProduct) {
            message.warning('Products already in the cart');
        } else {
            const updatedProducts = [...storedProducts, product];
            localStorage.setItem('products', JSON.stringify(updatedProducts));
            message.success('Product added to cart');
        }
    };
    return (
        <>
            <div className="book-container">
                <div className="image">
                    <img className="img" src={image} alt="" />
                </div>
                <div className="content">
                    <h3 className="title" style={style.title}>
                        .{title}
                    </h3>
                    {/* <div style={style.author} className="author">
                        <p style={style.author_p}>Written by: {author}</p>
                    </div> */}
                    <div className="price" style={style.price}>
                        <h3 style={style.h}>
                            {' '}
                            ${price}:id{id}
                        </h3>
                    </div>
                    <div className="description">{description}</div>
                    <Button
                        variant="outlined"
                        size="small"
                        style={style.icon}
                        onClick={handleClick}
                    >
                        <AddShoppingCartIcon />
                    </Button>
                    <Rating style={style.rate} value={rate} readOnly />
                </div>
            </div>
        </>
    );
}
export default Book;
