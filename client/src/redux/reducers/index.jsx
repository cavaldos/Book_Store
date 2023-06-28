const initialState = {
    products: [], // danh sách sản phẩm
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return {
                ...state,
                products: [...state.products, action.payload],
            };
        case 'REMOVE_PRODUCT':
            return {
                ...state,
                products: state.products.filter(
                    (product) => product.id !== action.payload,
                ),
            };
        case 'UPDATE_PRODUCT':
            return {
                ...state,
                products: state.products.map((product) =>
                    product.id === action.payload.id ? action.payload : product,
                ),
            };
        // addto cart
        case 'ADD_TO_CART':
            return {
                ...state,
                products: state.products.map((product) =>
                    product.id === action.payload.id
                        ? { ...product, inCart: true }
                        : product,
                ),
            };
        // remove from cart
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                products: state.products.map((product) =>
                    product.id === action.payload.id
                        ? { ...product, inCart: false }
                        : product,
                ),
            };
        default:
            return state;
    }
}

export default reducer;
