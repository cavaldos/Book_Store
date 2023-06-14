//////////////

import * as React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";

function Book() {
  return (
    <div>
      <section class="user-profile">
        <h1 class="heading">your profile</h1>

        <div class="info">
          <div class="user">
            <img src="../images/pic-1.jpg" alt="" />
            <h3>shaikh anas</h3>
            <p>student</p>
            <a href="update.html" class="inline-btn">
              update profile
            </a>
          </div>

          <div class="box-container">
            <div class="box">
              <div class="flex">
                <i class="fas fa-bookmark"></i>
                <div>
                  <span>4</span>
                  <p>saved playlist</p>
                </div>
              </div>
              <a href="#" class="inline-btn">
                view playlists
              </a>
            </div>

            <div class="box">
              <div class="flex">
                <i class="fas fa-heart"></i>
                <div>
                  <span>33</span>
                  <p>videos liked</p>
                </div>
              </div>
              <a href="#" class="inline-btn">
                view liked
              </a>
            </div>

            <div class="box">
              <div class="flex">
                <i class="fas fa-comment"></i>
                <div>
                  <span>12</span>
                  <p>videos comments</p>
                </div>
              </div>
              <a href="#" class="inline-btn">
                view comments
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Book;
