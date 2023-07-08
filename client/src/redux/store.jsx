// import { createStore } from 'redux'
// import combineReducers from "redux";
import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './features/bookSlice';
import userSlice from './features/userSilce';
import walletSlice from './features/walletSlice';
import themeSlice from './features/themeSlice';
import sidebarSlice from './features/sidebarSlice';
const store = configureStore(
    {
        reducer: {
            book: bookSlice,
            user: userSlice,
            wallet: walletSlice,
            theme: themeSlice,
            sidebar: sidebarSlice,
        },
    },
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
