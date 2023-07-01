import './index.scss';

import * as React from 'react';
import { useSelector } from 'react-redux';
function Book() {

    return (
        <>
            <div className="product">
                <div className="product__img">
                    <img
                        src="https://images.unsplash.com/photo-1682685797498-3bad2c6e161a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        alt=""
                    />
                </div>
                <div className="product__content">
                    <div className="price">
                     
                    </div>
                </div>
            </div>
        </>
    );
}

export default Book;
