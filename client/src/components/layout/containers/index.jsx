import './container.scss';
import React from 'react';
import Footer from '../footer';
function Container({ children }) {
    return (
        <>
            <div className="container">
                <div className="main">
                    {children}
                    <Footer />
                </div>
            </div>
        </>
    );
}
export default Container;
