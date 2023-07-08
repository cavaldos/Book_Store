import React from 'react';
import './styles.scss';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
function Product(props) {
    const { image, price, description } = props;
    const max = 10;
    const removeProduct = () => {};

    const [quantity, setQuantity] = useState(0); // tạo state để lưu số lượng sản phẩm được chọn
    const handleQuantityChange = (event) => {
        // cập nhật state số lượng sản phẩm được chọn khi người dùng thay đổi giá trị input
        setQuantity(event.target.value);
    };
    const total = price * quantity; // tính tổng số tiền cần thanh toán

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
                    <div className="description res">{description}</div>
                </div>
                <div className="quantity res">
                    <h5>The remaining amount : {max}</h5>
                    <input
                        className="input"
                        type="number"
                        name="num1"
                        min="0"
                        max={max}
                        onChange={handleQuantityChange}
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
                        onClick={() => removeProduct()}
                        variant="outlined"
                        startIcon={<DeleteIcon />}
                    >
                        Delete
                    </Button>
                    <div>Total: ${total}</div>{' '}
                </div>
            </div>
        </>
    );
}

export default Product;
