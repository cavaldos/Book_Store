//////////////

import * as React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
function Register() {
  return (
    <div>
      <section class="form-container">
        <form action="" method="post" enctype="multipart/form-data">
          <h3>register now</h3>
          <p>
            your name <span>*</span>
          </p>
          <input
            type="text"
            name="name"
            placeholder="enter your name"
            required
            maxlength="50"
            class="box"
          />
          <p>
            your email <span>*</span>
          </p>
          <input
            type="email"
            name="email"
            placeholder="enter your email"
            required
            maxlength="50"
            class="box"
          />
          <p>
            your password <span>*</span>
          </p>
          <input
            type="password"
            name="pass"
            placeholder="enter your password"
            required
            maxlength="20"
            class="box"
          />
          <p>
            confirm password <span>*</span>
          </p>
          <input
            type="password"
            name="c_pass"
            placeholder="confirm your password"
            required
            maxlength="20"
            class="box"
          />
          <p>
            select profile <span>*</span>
          </p>
          <input type="file" accept="image/*" required class="box" />
          <input type="submit" value="register new" name="submit" class="btn" />
        </form>
      </section>
    </div>
  );
}

export default Register;
