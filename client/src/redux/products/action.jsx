export const addProduct = (product) => ({
    type: 'ADD_PRODUCT',
    payload: product,
});

export const selectProducts = (state) => state.products.products;

export const removeProduct = (productId) => ({
    type: 'REMOVE_PRODUCT',
    payload: productId,
});

export const updateProduct = (product) => ({
    type: 'UPDATE_PRODUCT',
    payload: product,
});
export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    payload: product,
});

// remove from cart
export const removeFromCart = (product) => ({
    type: 'REMOVE_FROM_CART',
    payload: product,
});
export const selectCart = (state) =>
    state.products.products.filter((product) => product.inCart === true);
export const selectTotal = (state) =>
    state.products.products.reduce(
        (total, product) => total + product.price,
        0,
    );
export const selectCount = (state) =>
    state.products.products.reduce((count, product) => count + 1, 0);
export const selectProductById = (state, productId) =>
    state.products.products.find((product) => product.id === productId);
export const selectProductInCart = (state, productId) =>
    state.products.products.find(
        (product) => product.id === productId && product.inCart === true,
    );
export const selectProductNotInCart = (state, productId) =>
    state.products.products.find(
        (product) => product.id === productId && product.inCart === false,
    );
export const selectProductInCartCount = (state) =>
    state.products.products.reduce(
        (count, product) => (product.inCart === true ? count + 1 : count),
        0,
    );
export const selectProductNotInCartCount = (state) =>
    state.products.products.reduce(
        (count, product) => (product.inCart === false ? count + 1 : count),
        0,
    );
export const selectProductInCartTotal = (state) =>
    state.products.products.reduce(
        (total, product) =>
            product.inCart === true ? total + product.price : total,
        0,
    );
export const selectProductNotInCartTotal = (state) =>
    state.products.products.reduce(
        (total, product) =>
            product.inCart === false ? total + product.price : total,
        0,
    );
export const selectProductInCartTotalCount = (state) =>
    state.products.products.reduce(
        (count, product) => (product.inCart === true ? count + 1 : count),
        0,
    );
export const selectProductNotInCartTotalCount = (state) =>
    state.products.products.reduce(
        (count, product) => (product.inCart === false ? count + 1 : count),
        0,
    );
export const selectProductInCartTotalPrice = (state) =>
    state.products.products.reduce(
        (total, product) =>
            product.inCart === true ? total + product.price : total,
        0,
    );
export const selectProductNotInCartTotalPrice = (state) =>
    state.products.products.reduce(
        (total, product) =>
            product.inCart === false ? total + product.price : total,
        0,
    );
export const selectProductInCartTotalPriceCount = (state) =>
    state.products.products.reduce(
        (count, product) => (product.inCart === true ? count + 1 : count),
        0,
    );
export const selectProductNotInCartTotalPriceCount = (state) =>
    state.products.products.reduce(
        (count, product) => (product.inCart === false ? count + 1 : count),
        0,
    );
export const selectProductInCartTotalPriceTotal = (state) =>
    state.products.products.reduce(
        (total, product) =>
            product.inCart === true ? total + product.price : total,
        0,
    );
export const selectProductNotInCartTotalPriceTotal = (state) =>
    state.products.products.reduce(
        (total, product) =>
            product.inCart === false ? total + product.price : total,
        0,
    );
export const selectProductInCartTotalPriceTotalCount = (state) =>
    state.products.products.reduce(
        (count, product) => (product.inCart === true ? count + 1 : count),
        0,
    );
export const selectProductNotInCartTotalPriceTotalCount = (state) =>
    state.products.products.reduce(
        (count, product) => (product.inCart === false ? count + 1 : count),
        0,
    );
export const selectProductInCartTotalPriceTotalPrice = (state) =>
    state.products.products.reduce(
        (total, product) =>
            product.inCart === true ? total + product.price : total,
        0,
    );
export const selectProductNotInCartTotalPriceTotalPrice = (state) =>
    state.products.products.reduce(
        (total, product) =>
            product.inCart === false ? total + product.price : total,
        0,
    );
export const selectProductInCartTotalPriceTotalPriceCount = (state) =>
    state.products.products.reduce(
        (count, product) => (product.inCart === true ? count + 1 : count),
        0,
    );
export const selectProductNotInCartTotalPriceTotalPriceCount = (state) =>
    state.products.products.reduce(
        (count, product) => (product.inCart === false ? count + 1 : count),
        0,
    );
export const selectProductInCartTotalPriceTotalPriceTotal = (state) =>
    state.products.products.reduce(
        (total, product) =>
            product.inCart === true ? total + product.price : total,
        0,
    );
export const selectProductNotInCartTotalPriceTotalPriceTotal = (state) =>
    state.products.products.reduce(
        (total, product) =>
            product.inCart === false ? total + product.price : total,
        0,
    );
export const selectProductInCartTotalPriceTotalPriceTotalCount = (state) =>
    state.products.products.reduce(
        (count, product) => (product.inCart === true ? count + 1 : count),
        0,
    );
export const selectProductNotInCartTotalPriceTotalPriceTotalCount = (state) =>
    state.products.products.reduce(
        (count, product) => (product.inCart === false ? count + 1 : count),
        0,
    );
export const selectProductInCartTotalPriceTotalPriceTotalPrice = (state) =>
    state.products.products.reduce(
        (total, product) =>
            product.inCart === true ? total + product.price : total,
        0,
    );
export const selectProductNotInCartTotalPriceTotalPriceTotalPrice = (state) =>
    state.products.products.reduce(
        (total, product) =>
            product.inCart === false ? total + product.price : total,
        0,
    );