import React from 'react';
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './Routes';
import { publicRoutes } from './Routes';
import { CSSReset, ThemeProvider } from '@chakra-ui/core';

import './App.scss';
import DefaultLayout from './components/main';

const App = () => {
    const VerifyRoure = publicRoutes;

    return (
        <Router>
            <div className="App">
                <Routes>
                    {/*  */}
                    {VerifyRoure.map((route, index) => {
                        const Layout =
                            route.layout === null ? Fragment : DefaultLayout;
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                    {/*  */}
                </Routes>
            </div>
            <ThemeProvider>
                <CSSReset />
                {/* <div className="App"> */}
                <Routes>
                    {/*  */}
                    {publicRoutes.map((route, index) => {
                        const Layout =
                            route.layout === null ? Fragment : DefaultLayout;
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                    {/*  */}
                </Routes>
                {/* </div> */}
            </ThemeProvider>
        </Router>
    );
};

export default App;
