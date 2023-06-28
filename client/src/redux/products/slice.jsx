import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [], // danh sách sản phẩm
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter(
                (product) => product.id !== action.payload,
            );
        },
        updateProduct: (state, action) => {
            state.products = state.products.map((product) =>
                product.id === action.payload.id ? action.payload : product,
            );
        },
        // addto cart
        addToCart: (state, action) => {
            state.products = state.products.map((product) =>
                product.id === action.payload.id
                    ? { ...product, inCart: true }
                    : product,
            );
        },
        // remove from cart
        removeFromCart: (state, action) => {
            state.products = state.products.map((product) =>
                product.id === action.payload.id
                    ? { ...product, inCart: false }
                    : product,
            );
        },
    },
});

export const { addProduct, removeProduct, updateProduct,addToCart,removeFromCart } =
    productsSlice.actions;
export default productsSlice.reducer;
