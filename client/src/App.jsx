import React from "react";
import ReactDOM from "react-dom";
import "./App.scss";

import Header from "./components/DefaultLayout/header";
import Sidebar from "./components/DefaultLayout/sidebar";
import Login from "./components/DefaultLayout/login";
import Register from "./components/DefaultLayout/register";
import Book from "./components/DefaultLayout/book";
import Manager from "./components/DefaultLayout/manager";
import Wrapper from "./components/DefaultLayout/wrapper";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Register />
      <Sidebar />
    </div>
  );
};

const Main = () => {
  return (
    <div className="wrapper">
      <Header />
      <Login />
      <Sidebar />
    </div>
  );
};

const Wpage = () => {
  return (
    <div className="wrapper">
     
      <Wrapper />
    </div>
  );
};
ReactDOM.render(<Main />, document.getElementById("root"));
// export default Main;
// export default Home;
export default Main;
//co