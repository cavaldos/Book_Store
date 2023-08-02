import React from 'react';
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './Routes';

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
        </Router>
    );
};

export default App;
