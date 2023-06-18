// import React from "react";
// import { Link } from "react-router-dom";

import "./header.scss";
// import Setting from "./setting";
// import Search from "./search";
// function Header() {
//   return (
//     <>
//       <section class="flex">
//       <Setting className ="setting" />
//       <Search className ="search"/>
//       </section>
//     </>
//   );
// }
// export default Header;
// import React from "react";

// function Header() {
//   return (
//     <header className="header">
//       <section className="flex">
//         <a href="home.html" className="logo">
//           Educa.
//         </a>
//         <form action="search.html" method="post" className="search-form">
//           <input
//             type="text"
//             name="search_box"
//             required
//             placeholder="search courses..."
//             maxLength="100"
//           />
//           <button type="submit" className="fas fa-search"></button>
//         </form>
//         <div className="icons">
//           <div id="menu-btn" className="fas fa-bars"></div>
//           <div id="search-btn" className="fas fa-search"></div>
//           <div id="user-btn" className="fas fa-user"></div>
//           <div id="toggle-btn" className="fas fa-sun"></div>
//         </div>
//         <div className="profile">
//           <img src="images/pic-1.jpg" className="image" alt="" />
//           <h3 className="name">shaikh anas</h3>
//           <p className="role">studen</p>
//           <a href="profile.html" className="btn">
//             view profile
//           </a>
//           <div className="flex-btn">
//             <a href="login.html" className="option-btn">
//               login
//             </a>
//             <a href="register.html" className="option-btn">
//               register
//             </a>
//           </div>
//         </div>
//       </section>
//     </header>
//   );
// }

// export default Header;

import React from "react";
import User from "./user";
import Search from "./search";
import Menu from "./menu";
function Header() {
  return (
    <>
      <header className="header">
        <h2 className="logo">Book Store</h2>
        <nav className="navigation">
          <Search />
          <Menu />
          <User />
        </nav>
      </header>
    </>
  );
}

export default Header;
