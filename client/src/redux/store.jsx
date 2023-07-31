import bookSlice from "./features/bookSlice";
import userSlice from "./features/userSilce";
import roleSlice from "./features/roleSlice";
import themeSlice from "./features/themeSlice";
import paymentSlice from "./features/paymentSlice";



import combineReducers from "redux";
import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const store = configureStore({
  reducer: {
    book: bookSlice,
    user: userSlice,
    role: roleSlice,
    theme: themeSlice,
    payment: paymentSlice,
  },
});

export default store;
