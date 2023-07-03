import './index.scss';
import React from 'react';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Rating from '@mui/material/Rating';


const style = {
    icon: {
        backgroundColor: '',
        color: 'black',
        border: '1px solid black',
        position: 'absolute',
        bottom: '40px',
        left: '15px',
    },
    price: {
        color: 'red',
        position: 'absolute',
        height: '35px',
        width: '100px',
        bottom: '36px',
        right: '10px',
        justifyContent: 'center',
        alignItems: 'center',
    },
    h: {
        position: 'relative',
        top: '5px',
        color: 'black',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    title: {
        margin: '0px 5px ',
    },
    rate: {
        position: 'absolute',
        textAlign: 'center',
        bottom: '10px',
        right: '10px',
        left: '10px',
        justifyContent: 'center',
    },
    author: {
        backgroundColor: 'gray',
        padding: '0px ',
        margin: ' 5px 5px 0px 5px ',
    },
    author_p: {
        position: 'absolute',
        left: '5px',

        display: 'inline-block',
        fontSize: '12px',
    },
};
function addToCart(productId, quantity) {
    fetch('/api/add-to-cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ productId, quantity })
    })
    .then(response => {
      if (response.ok) {
        console.log('Item added to cart!');
      } else {
        console.error('Error adding item to cart:', response.statusText);
      }
    })
    .catch(error => {
      console.error('Error adding item to cart:', error);
    });
}
function Book(props, productId, quantity) {
    const { title, price, description, image, rate } = props;
    const handleClick = () => {
        addToCart(productId, quantity);
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
                        <h3 style={style.h}> ${price}</h3>
                    </div>
                    <div className="description">{description}</div>
                    <Button variant="outlined" size="small" style={style.icon} onClick={handleClick}>
                        <AddShoppingCartIcon />
                    </Button>
                    <Rating style={style.rate} value={rate} readOnly />
                </div>
            </div>
        </>
    );
}
export default Book;
