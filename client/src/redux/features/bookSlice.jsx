import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice({
    name: 'book',
    initialState: {
        id: 12,
        title: 'd',
        price: 100,

    },

    reducers: {
        addToCart: (state, action) => {
            return {
                ...state,
                id: action.payload.id,
            };
        },
        
      
    },
});

export const { addToCart} = bookSlice.actions;

export default bookSlice.reducer;
