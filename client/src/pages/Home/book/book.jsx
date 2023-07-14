import './index.scss';
import style from './styles';
import React from 'react';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Rating from '@mui/material/Rating';
import { message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addQuantity, updatePrice } from '../../../redux/features/paymentSlice';

function Book(props) {
    const { id, title, price, description, image, rate, quantity } = props;
    const product = { id, title, price, description, image, rate, quantity };
    
    const dispatch = useDispatch();
  
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
            dispatch(
                addQuantity({
                    product: {
                        id: id,
                        quantity: 1,
                        price: price,
                    },
                }),
            );
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
                        {title}
                    </h3>
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
