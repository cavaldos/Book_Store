import bookSlice from "./features/bookSlice";
import userSlice from "./features/userSilce";
import roleSlice from "./features/roleSlice";
import notifySlice from "./features/notifySlice";
import paymentSlice from "./features/paymentSlice";
import orderSlice from "./features/orderSlice";
import shippinginfoSlice from "./features/shippinginfoSlice";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
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
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["user","role", "order" ],
};
const rootReducer = combineReducers({
  role: roleSlice,
  notify: notifySlice,
  payment: paymentSlice,
  book: bookSlice,
  user: userSlice,
  oder: orderSlice,
  shippinginfo: shippinginfoSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export let persistor = persistStore(store);

export default store;
