import React from "react";
import ReactDOM from "react-dom";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//
import { publicRoutes } from "./Routes";
const App = () => {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          );
        })}
      </Routes>
    </Router>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));

export default App;
