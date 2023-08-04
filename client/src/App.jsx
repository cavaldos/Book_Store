import "./App.scss";

import React from "react";
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
import LoadingError from "./components/layout/error/loading";
const Notfound = React.lazy(() => import("./components/layout/error/notfound"));
const App = () => {
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
                  <Page />
                  <Outlet />
                </Layout>
              }
            />
          );
        })}
        <Route
          path="*"
          element={
            <React.Suspense fallback={<LoadingError />}>
              <Notfound />
            </React.Suspense>
          }
        />
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
