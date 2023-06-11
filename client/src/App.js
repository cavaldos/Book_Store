// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// import { Routes, Route, Link } from 'react-router-dom';
// import React from 'react';
// import Homepage from './pages/home';
// import Contact from './pages/contact';
// import NewBook from './pages/new';
// function App() {
//   return (
//     <div className="app">

//       <h1>Book Store</h1>
//       <nav>
//         <ul>
//           <li><Link to ="/">Home</Link></li>
//           <li><Link to ="/contact">Contact</Link></li>
//           <li><Link to ="/new">New</Link></li>
//         </ul>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/new" element={<NewBook />} />
//       </Routes>
//     </div>
//   );

// }
// export default App;
import "./App.css";
import React from "react";
import Homepage from "./pages/home";
import Contact from "./pages/contact";
import NewBook from "./pages/new";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
function App() {
  return (
    <div className="app">
      <header class="header">
      
        <h1 class="title">
          Book Store
          <FaFacebook></FaFacebook>
        </h1>
      </header>
    </div>
  );
}

export default App;
