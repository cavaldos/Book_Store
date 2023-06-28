import { useSelector, useDispatch } from 'react-redux';
import {
    addProduct,
    removeProduct,
    updateProduct,
    addToCart,
    removeFromCart,
} from '../redux/products/actions';

function ProductList() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);

    const handleAddProduct = (product) => {
        dispatch(addProduct(product));
    };

    const handleRemoveProduct = (productId) => {
        dispatch(removeProduct(productId));
    };

    const handleUpdateProduct = (product) => {
        dispatch(updateProduct(product));
    };
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };
    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product));
    };
    

    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <p>{product.name}</p>
                    <button onClick={() => handleRemoveProduct(product.id)}>
                        Remove
                    </button>
                    <button
                        onClick={() =>
                            handleUpdateProduct({ ...product, price: 10 })
                        }
                    >
                        Update
                    </button>
                </div>
            ))}
            <button
                onClick={() =>
                    handleAddProduct({ id: 1, name: 'Book 1', price: 5 })
                }
            >
                Add Product
            </button>
        </div>
    );
}

export default ProductList;
