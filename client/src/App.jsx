import React from "react";
import ReactDOM from "react-dom";
import "./App.scss";

import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Book from "./components/book/book";
const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Login />
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

ReactDOM.render(<Main />, document.getElementById("root"));
export default Main;

// function BasicExample() {
//   return (
//     <div>
//       <header class="header">
//         <section class="flex">
//           <a href="home.html" class="logo">
//             Book Store
//           </a>

//           <form action="search.html" method="post" class="search-form">
//             <input
//               type="text"
//               name="search_box"
//               required
//               placeholder="search courses..."
//               maxlength="100"
//             />
//             <button type="submit" class="fas fa-search"></button>
//           </form>

//           <div class="icons">
//             <div id="menu-btn" class="fas fa-bars"></div>
//             <div id="search-btn" class="fas fa-search"></div>
//             <div id="user-btn" class="fas fa-user"></div>
//             <div id="toggle-btn" class="fas fa-sun"></div>
//           </div>

//           <div class="profile">
//             <img src="images/pic-1.jpg" class="image" alt="" />
//             <h3 class="name">shaikh anas</h3>
//             <p class="role">studen</p>
//             <a href="profile.html" class="btn">
//               view profile
//             </a>
//             <div class="flex-btn">
//               <a href="login.html" class="option-btn">
//                 login
//               </a>
//               <a href="register.html" class="option-btn">
//                 register
//               </a>
//             </div>
//           </div>
//         </section>
//       </header>

//       <div class="side-bar">
//         <div id="close-btn">
//           <i class="fas fa-times"></i>
//         </div>

//         <div class="profile">
//           <img src="images/pic-1.jpg" class="image" alt=""></img>
//           <h3 class="name">shaikh anas</h3>
//           <p class="role">studen</p>
//           <a href="profile.html" class="btn">
//             view profile
//           </a>
//         </div>

//         <nav class="navbar">
//           <a href="home.html">
//             <i class="fas fa-home"></i>
//             <span>home</span>
//           </a>
//           <a href="about.html">
//             <i class="fas fa-question"></i>
//             <span>about</span>
//           </a>
//           <a href="courses.html">
//             <i class="fas fa-graduation-cap"></i>
//             <span>courses</span>
//           </a>
//           <a href="teachers.html">
//             <i class="fas fa-chalkboard-user"></i>
//             <span>seller</span>
//           </a>
//           <a href="contact.html">
//             <i class="fas fa-headset"></i>
//             <span>contact us</span>
//           </a>
//         </nav>
//       </div>
//     </div>
//   );
// }

// export default BasicExample;
