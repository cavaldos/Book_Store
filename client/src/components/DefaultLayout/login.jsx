//////////////

import * as React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";

function Login() {
  return (
    <div>
      <section class="form-container">
        <form action="" method="post" enctype="multipart/form-data">
          <h3>login now</h3>
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
          <input type="submit" value="login new" name="submit" class="btn" />
        </form>
      </section>
    </div>
  );
}

export default Login;