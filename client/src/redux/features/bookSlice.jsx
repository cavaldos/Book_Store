import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice({
    name: 'book',
    initialState: {
        id: 12,
        title: 'dsa',
        price: 100,

    },

    reducers: {
        addToCart: (state, action) => {
            return {
                ...state,
            };
        },
        
      
    },
});

export const { addToCart} = bookSlice.actions;

export default bookSlice.reducer;
