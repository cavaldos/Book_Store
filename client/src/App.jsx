import "./App.scss";
import React from "react";
import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/main";
import { setRole } from "./redux/features/roleSlice";
import {
  publicRoutes,
  adminRoutes,
  userRoutes,
  employeeRoutes,
} from "./Routes";
import {  useSelector } from "react-redux";
const App = () => {
  const role = useSelector((state) => state.role.role);
  
  const VerifyRoure = () => {
    switch (role) {
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
      <div className="App">
        <Routes>
          {/*  */}
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
          {/*  */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
