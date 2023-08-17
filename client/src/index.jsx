import React from "react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";
import { createRoot } from "react-dom/client";

import { PersistGate } from "redux-persist/integration/react";

import { persistor } from "./redux/store";
const root = createRoot(document.getElementById("root"));


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>   
        <App />  
      </PersistGate>
    </Provider>
  </React.StrictMode>

);
reportWebVitals();