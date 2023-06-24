import React from "react";
import ReactDOM from "react-dom/client";
import "./App.scss";
import { createRoot } from "react-dom/client";



import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//
import { publicRoutes } from "./Routes";
const App = () => {
  return (
    <Router>
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
    </Router>
  );
};
// ReactDOM.render(<App />, document.getElementById("root"));

const rootElement = document.getElementById("root");
createRoot(rootElement).render(<App />);
// export default App;

// const rootElement = document.getElementById("root");
// ReactDOM.createRoot(rootElement).render(<App />);

const root = ReactDOM.createRoot(document.getElementById("root"));

if (root._internalRoot) {
  root.render(<App />);
} else {
  ReactDOM.render(<App />, document.getElementById("root"));
}
export default App;

