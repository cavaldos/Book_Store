import React from 'react';
import Header from '../components/layout/header';
import Sider from '../components/layout/sidebar';
import Container from '../components/layout/containers';
import Home from '../pages/Home';

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <Sider />
            {/* <Container >
                {window.location.pathname === '/' ? <Home /> : <>{children}</>}
            </Container> */}
            <div className="main">
                {/* {children} */}
                <Container>
                    {window.location.pathname === '/' ? (
                        <Home />
                    ) : (
                        <>{children}</>
                    )}
                </Container>
            </div>
        </>
    );
}

export default DefaultLayout;
