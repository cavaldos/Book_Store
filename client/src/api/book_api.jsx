import axios from 'axios';

function fetchProducts() {
    return axios
        .get('https://fakeapi.com/products')
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
        });
}

function getBookProducts(products) {
    return products.filter((product) => product.type === 'book');
}

async function fetchBookProducts() {
    try {
        const products = await fetchProducts();
        const bookProducts = getBookProducts(products);
        return bookProducts;
    } catch (error) {
        console.log(error);
    }
}
export { fetchBookProducts };