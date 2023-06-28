import { createStore, combineReducers } from 'redux';
import reducers from './reducers';

const rootReducer = combineReducers({
    // các reducer sẽ được kết nối vào đây
    reducers,
});

const store = createStore(rootReducer);

export default store;
