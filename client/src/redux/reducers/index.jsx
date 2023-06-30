const initialState = {
    count: 0,
};

function counterReducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT_COUNTER':
            return { ...state, count: state.count + 1 };
        case 'DECREMENT_COUNTER':
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
}

export default counterReducer;
