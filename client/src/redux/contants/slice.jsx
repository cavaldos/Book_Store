import { addToCart } from '../actions/actions';
import ActionsType from '../actions/actionsType';
import createSlice from '@reduxjs/toolkit';

export const productSlice = createSlice({
    initialState: {
        products: [
            {
                id: 1,
                title: 'book',
                category: 'novel',
                price: 10,
                description: 'This is the best Nike shoes',
                image: 'https://images.unsplash.com/photo-1612835362596-4b0b2b0b0b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
                author: 'John Doe',
                rating: 4.5,
                quantity: 1,
                addtocart: false,
            },
        ],
        users: [
            {
                id: 1,
                name: 'John Doe',
                email: 'jhon@gmail.com',
                password: '123456',
                role: 'admin',
            },
        ],
    },
    reducers: {
        setProduct: (state, action) => {
            state.products = action.payload.name;
            
        },
        addToCart: (state, action) => {
            state.products = action.payload;
        },
    },
});
