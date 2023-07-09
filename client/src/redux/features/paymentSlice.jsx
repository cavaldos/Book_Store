import { createSlice } from '@reduxjs/toolkit';

export const paymentSlice = createSlice({
    name: 'payment',
    initialState: {
        products: [{ id: 0, quantity: 0, price: 0 }],
    },

    reducers: {
        addQuantity: (state, action) => {
            return {
                ...state,
                products: state.products.map((product) => {
                    if (product.id === action.payload) {
                        return {
                            ...product,
                            quantity: product.quantity += 1,
                        };
                    }
                    return product;
                }),
            };
        },
        updatePrice: (state, action) => {
            return {
                ...state,
                price: action.payload,
            };
        },
    },
});

export const { addQuantity, updatePrice } = paymentSlice.actions;

export default paymentSlice.reducer;
