import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { createRoot ,ReactDOM } from "react-dom/client";

//
import Sidebar from "./components/layout/sidebar";
import Header from "./components/layout/header";
import { publicRoutes } from "./Routes";
import "./App.scss";
const App = () => {
  return (
    <Router>
      <Header />
      <Sidebar />
      <div className="App">
        <Routes>
          {/*  */}
          {publicRoutes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                element={<route.component />}
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






// const rootElement = document.getElementById("root");
// createRoot(rootElement).render(<App />);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// if (root._internalRoot) {
//   root.render(<App />);
// } else {
//   ReactDOM.render(<App />, document.getElementById("root"));
// }
