import "./App.scss";
import axios from 'axios'

import React, {useEffect, useState } from "react";
import { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import DefaultLayout from "./components/main";
import { publicRoutes, userRoutes, employeeRoutes } from "./Routes";
import adminRoutes from "./Routes/adminRoutes";
import { useSelector } from "react-redux";

// Payment
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const Notfound = React.lazy(() => import("./components/layout/error/notfound"));
const App = () => {
  const [stripeApiKey, setStripeApiKey] = useState('');

  useEffect(() => {

    async function getStripApiKey() {
      const { data } = await axios.get('http://localhost:8000/sendAPIStripe');

      setStripeApiKey(data.stripeApiKey)
    }

    getStripApiKey();

  }, [])


  const roleRouter = useSelector((state) => state.role.roleRouter);
  const VerifyRoure = () => {
    switch (roleRouter) {
      case "admin":
        return adminRoutes;
      case "user":
        return userRoutes;
      case "employee":
        return employeeRoutes;
      default:
        return publicRoutes;
    }
  };
  return (
    <Router>
      <Routes>
        {VerifyRoure().map((route, index) => {
          const Layout = route.layout === null ? Fragment : DefaultLayout;
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Elements stripe={loadStripe(stripeApiKey)}>
                    <Page />
                    <Outlet />
                  </Elements>
                </Layout>
              }
            />
          );
        })}
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
};

export default App;

/*
{VerifyRoure().map((route, index) => {
            const Layout = route.layout === null ? Fragment : DefaultLayout;
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

*/
