import React from 'react';
import './styles.scss';
const DefaultLayout = ({ children }) => {
    return (
        <>
            <div>
                <div className="sidebar">sidebar</div>
                <div className="header">
                    <h1> header</h1>
                </div>
                <div className="main">
                    <div className="container">{children}</div>
                    <div className="footer"></div>
                </div>
            </div>
        </>
    );
};

export default DefaultLayout;
