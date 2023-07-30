// import { createStore } from 'redux'
// import combineReducers from "redux";
import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './features/bookSlice';
import userSlice from './features/userSilce';
import roleSlice from './features/roleSlice';
import themeSlice from './features/themeSlice';
import paymentSlice from './features/paymentSlice';
// import roleSlice  from './features/roleSlice';
const store = configureStore(
    {
        reducer: {
            book: bookSlice,
            user: userSlice,
            role: roleSlice,
            theme: themeSlice,
            payment: paymentSlice,
         
        },
    },
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
