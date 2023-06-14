import * as React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
function Sidebar() {
  return (
    <div class="side-bar">
      <div id="close-btn">
        <i class="fas fa-times"></i>
      </div>

      <div class="profile">
        <img src="/logo512.png" class="image" alt=""></img>
        <h3 class="name">User</h3>
        <p class="role">vistor</p>
        <a href="profile.html" class="btn">
          Login Account
        </a>
      </div>

      <nav class="navbar">
        <a href="home.html">
          <i class="fas fa-home"></i>
          <span>home</span>
        </a>
        <a href="product.html">
          <i class="fa-brands fa-product-hunt"></i>
          <span>product</span>
        </a>
        <a href="promotion.html">
          <i class="fa-solid fa-rectangle-ad"></i>
          <span>promotion</span>
        </a>
        <a href="teachers.html">
          <i class="fas fa-chalkboard-user"></i>
          <span>seller</span>
        </a>
        <a href="contact.html">
          <i class="fas fa-headset"></i>
          <span>contact us</span>
        </a>
      </nav>
    </div>
  );
}

export default Sidebar;
