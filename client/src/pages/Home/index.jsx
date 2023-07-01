import './com/index.scss';
import React from 'react';

import { useSelector } from 'react-redux';
// import {productReducer} from '../../redux/reducers/productReducer';
import { useDispatch } from 'react-redux';
// import {userReducer} from '../../redux/reducers/productReducer';

function Home() {
    const products = useSelector((state) => state.allProducts);
    const users = useSelector((state) => state.allUsers);
    const addToCart = useSelector((state) => state.addToCart);
    const dispatch = useDispatch();
    // const dispatch = useDispatch();
    const add_to_cart = (id) => {
        dispatch(addToCart(id));
    };
    console.log(products);
    console.log(users);

    return (
        <>
            {products.map((product) => {
                const {
                    id,
                    title,
                    category,
                    price,
                    description,
                    image,
                    author,
                    rating,
                    quantity,
                    addtocart,
                } = product;
                return (
                    <div className="container" key={id}>
                        <div className="image">
                            <img src={image} alt={title} />
                        </div>
                        <div className="content">
                            <h3>{title}</h3>
                            <h3>{category}</h3>
                            <h3>{price}</h3>
                            <h3>{description}</h3>
                            <h3>{author}</h3>
                            <h3>{rating}</h3>
                            <p>cart:</p>
                            <h3>{quantity}</h3>
                            <h3>{addtocart}</h3>
                        </div>
                        <div className="button">
                            <button
                                onClick={() => add_to_cart(addToCart)}
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default Home;
