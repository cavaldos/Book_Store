import './index.scss';
import style from './styles';
import React from 'react';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Rating from '@mui/material/Rating';
import { message } from 'antd';


// const mongoose = require('mongoose');
// const mySchema = new mongoose.Schema({
//     id: String,
//     title: String,
//     price: String, 
//     image: String,
//     rate: String,
// });

// const MyModel = mongoose.model('MyModel', mySchema);

function Book(props) {
    const { id, title, price, description, image, rate } = props;
    const product = { id, title, price, description, image, rate };


    const handleClick = () => {
        const storedProducts =
            JSON.parse(localStorage.getItem('products')) || [];

        alert(JSON.stringify(storedProducts));
        // const newDocument = new MyModel(JSON.stringify(storedProducts));
        // // Save the new document to the database
        // newDocument.save(function(err, savedDocument) {
        //     if (err) return console.error(err);
        //     console.log(savedDocument);
        // });
        
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
