import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import store from './redux/store';

import RenderSnackbar from "./components/snackbar/snackbar";
import SimpleBackdrop from "./components/backdrop/backdrop";

const root = ReactDOM.createRoot(document.getElementById('root'));
// const store = createStore(reducer);
root.render(
    <React.StrictMode>
        <Provider store={store}> 
            <RenderSnackbar>
                <SimpleBackdrop>
                    <App />  
                </SimpleBackdrop>
            </RenderSnackbar> 
        </Provider>
    </React.StrictMode>,
);

reportWebVitals();
