import React from 'react';
import './styles.scss';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { message } from 'antd';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    addQuantity,
    updatePrice,
    removeQuantity,
    resetState,
} from '../../redux/features/paymentSlice';

function Product(props) {
    const { id, image, price, description } = props;
    const max = 10;
    const dispatch = useDispatch();
    const [new_quantity, setQuantity] = useState(1);
    const quantity = useSelector((state) => {
        const product = state.payment.products.find(
            (product) => product.id === id,
        );
        return product ? product.quantity : 0;
    });
    const [quantityState, setQuantityState] = useState(quantity);

    useEffect(() => {
        setQuantityState(quantity);
    }, [quantity]);

    const total = price * quantity;
    const handleAddproduct = () => {
        if (quantity < max) {
            setQuantity(quantity + 1);

            dispatch(
                addQuantity({
                    product: {
                        id: id,
                        quantity: 1,
                        price: price,
                    },
                }),
            );
        }
    };
    const handleSubproduct = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            dispatch(
                addQuantity({
                    product: {
                        id: id,
                        quantity: -1,
                        price: price,
                    },
                }),
            );
        }
    };

    console.log('nqii', new_quantity);
    // remove product
    const [deletedProductId, setDeletedProductId] = useState(null);
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    const removeProduct = (id) => {
        dispatch(resetState());
        const newProducts = storedProducts.filter(
            (product) => product.id !== id,
        );
        localStorage.setItem('products', JSON.stringify(newProducts));
        setDeletedProductId(id);
        message.success('Product removed from cart');
    };
    useEffect(() => {
        // dispatch(removeQuantity(id));
        if (deletedProductId !== null) {
            window.location.reload();
            dispatch(resetState());
        }
    }, [deletedProductId]);

    return (
        <>
            <div className="product">
                <div className="block-product res">
                    <div className="image res">
                        <img
                            className="img"
                            src={image}
                            alt="this is picture"
                        />
                    </div>
                    <div className="description res">
                        {description}
                        {id}
                    </div>
                </div>
                <div className="quantity res">
                    <h3 className="icon title">{quantityState}</h3>
                    <AddIcon
                        className="icon add"
                        onClick={() => {
                            handleAddproduct();
                        }}
                    />
                    <RemoveIcon
                        className="icon sub"
                        onClick={() => {
                            handleSubproduct();
                        }}
                    />
                </div>
                <div className="price res">${price}</div>
                <div className="remove res">
                    <Button
                        style={{
                            color: 'var(--text-dark)',
                            borderColor: 'var(--text-dark)',
                            // hover
                            '&:hover': {
                                cursor: 'pointer',
                            },
                        }}
                        onClick={() => removeProduct(id)}
                        variant="outlined"
                        startIcon={<DeleteIcon />}
                    >
                        Delete
                    </Button>
                    <h5 className="total-product">Total: ${total}</h5>
                </div>
            </div>
        </>
    );
}

export default Product;
