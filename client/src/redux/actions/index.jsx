// import axios from 'axios';  

export const addProduct = (product) => ({
    type: 'ADD_PRODUCT',
    payload: product,
});

export const removeProduct = (productId) => ({
    type: 'REMOVE_PRODUCT',
    payload: productId,
});

export const updateProduct = (product) => ({
    type: 'UPDATE_PRODUCT',
    payload: product,
});

// add to cart
export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    payload: product,
});

// remove from cart
export const removeFromCart = (product) => ({
    type: 'REMOVE_FROM_CART',
    payload: product,
});