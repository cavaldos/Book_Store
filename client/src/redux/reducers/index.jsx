// import { combineReducers } from 'redux';
// import { productReducer } from './productReducer';

// const reducers = combineReducers({
//     allProducts: productReducer,
// });
// export default reducers;

import { combineReducers } from 'redux';
import { productReducer } from './productReducer';
import { userReducer } from './productReducer';
const reducers = combineReducers({
    allProducts: productReducer,
    allUsers: userReducer,
});

export default reducers;
