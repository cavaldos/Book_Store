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
import "./reset.css";
import "./App.css";
import React from "react";
//icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faAddressCard,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";

//file
import Homepage from "./pages/home";
import Contact from "./pages/contact";
import NewBook from "./pages/new";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaGooglePlusG } from "react-icons/fa";
function App() {
  return (
    <body>
      <div className="signup">
        <h1 class="signup-heading">Sign Up</h1>
        <button class="signup-btn">Sign up with Google</button>
        <div class="signup-or">
          <span>Or</span>
        </div>
        {/* name */}
        <form action="#" class="signup-form" autoComplete="off">
          <label for="fullname" class="signup-label">
            Full name
          </label>
          <input
            type="text"
            id="fullname"
            class="signup-input"
            placeholder="Eg: khanh"
          />
          {/* mail */}
          <label for="email" class="signup-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            class="signup-input"
            placeholder="Eg: khanh@gmail.com"
          />
          <button class="signup-submit">Sign up</button>
        </form>
        <p class="signup-already">
          <span>Already have an account?</span>
          <a href="#" class="signup-login-link">
            Login
          </a>
        </p>
      </div>
    </body>
  );
}

export default App;
// export default MyComponent;
