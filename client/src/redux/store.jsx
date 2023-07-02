// import { createStore } from 'redux'
// import combineReducers from "redux";
import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './features/bookSlice';
import userSlice from './features/userSilce';
import walletSlice from './features/walletSlice';
const store = configureStore(
    {
        reducer: {
            book: bookSlice,
            user: userSlice,
            wallet: walletSlice,
        },
    },
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
