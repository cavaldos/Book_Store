import React from 'react';
import './styles.scss';
import Product from './Product';
import { useState } from 'react';

function Cart() {
    const image =
        'https://images.unsplash.com/photo-1688648502777-e22f2aaa567c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1984&q=80';
    // const [quantity, setQuantity] = useState(0); // tạo state để lưu số lượng sản phẩm được chọn
    // const handleQuantityChange = (event) => {
    //     // cập nhật state số lượng sản phẩm được chọn khi người dùng thay đổi giá trị input
    //     setQuantity(event.target.value);
    // };
    // const total = price * quantity; // tính tổng số tiền cần thanh toán

    return (
        <>
            <div className="list-product">
                <div className="header-product">
                    <h5 className="title mar">Product</h5>
                    <h5 className="quantity mar">Quantity</h5>
                    <h5 className="price mar">Price</h5>
                    <h5 className="remove mar">Remove</h5>
                </div>
                <Product
                    price="100"
                    image={image}
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
                />{' '}
                <Product
                    price="100"
                    image={image}
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
                />{' '}
                <Product
                    price="100"
                    image={image}
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
                />{' '}
                <Product
                    price="100"
                    image={image}
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
                />
            </div>
            <div className="total">dfsa</div>
        </>
    );
}

export default Cart;
