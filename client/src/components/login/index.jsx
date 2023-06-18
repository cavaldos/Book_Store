import React from "react";
import "./login.scss";

function Login() {
  return (
    <>
      <div className="wrapper">
        <div className="login">
          <h2>Login</h2>
          <form action="#">
            <div className="input-box">
              <span className="icon">
                <i class="fa-solid fa-envelope"></i>
              </span>
              <input type="email" placeholder="Username" required />
              <label>Email</label>
            </div>
            {/*  */}
            <div className="input-box">
              <span className="icon"></span>
              <input type="password" placeholder="password" required />
              <label>Password</label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
