import * as React from "react";
import ReactDOM from "react-dom";
import "../styles.scss";
// import "./sidebar.scss";
function Sidebar() {
  return (
    <div class="side-bar">
      <div id="close-btn">
        <i class="fas fa-times"></i>
      </div>

      <div class="profile">
        <img src="images/pic-1.jpg" class="image" alt=""></img>
        <h3 class="name">shaikh anas</h3>
        <p class="role">studen</p>
        <a href="profile.html" class="btn">
          view profile
        </a>
      </div>

      <nav class="navbar">
        <a href="home.html">
          <i class="fas fa-home"></i>
          <span>home</span>
        </a>
        <a href="about.html">
          <i class="fas fa-question"></i>
          <span>about</span>
        </a>
        <a href="courses.html">
          <i class="fas fa-graduation-cap"></i>
          <span>courses</span>
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
