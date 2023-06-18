// import React from "react";
// import "./login.scss";

// function Login() {
//   return (
//     <>
//       <div className="wrapper">
//         <div className="login">
//           <h2>Login</h2>
//           <form action="#">
//             <div className="input-box">
//               <span className="icon">
//                 <i class="fa-solid fa-envelope"></i>
//               </span>
//               <input type="email" placeholder="Username" required />
//               <label>Email</label>
//             </div>
//             {/*  */}
//             <div className="input-box">
//               <span className="icon"></span>
//               <i class="fa-solid fa-lock"></i>
//               <input type="password" placeholder="password" required />
//               <label>Password</label>
//             </div>
//             <div className="remember-forgot">
//               <label>
//                 <input type="checkbox" />
//                 Remember me
//               </label>
//               <a href="#">Forgot Password</a>
//             </div>

//             <button type="submit">Login</button>
//             <div className="login-register">
//               <p> Don't have an account yet?
//                 <a href="#" className="register-link"></a>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Login;
import React from "react";
import "./login.scss";
import { Link } from "react-router-dom";
function Login() {
  return (
    <section className="login-container">
      <div className="login-title"> Log in</div>
      <form>
        <label>USERNAME</label>
        <input type="text" placeholder="Enter your username" />
        <label>PASSWORD</label>
        <input type="password" placeholder="Enter your password" />
        <button type="submit"> Continue </button>
      </form>
      <div className="login-register"> Don't have an account yet? </div>
      <Link className="login-register-link" to="/register">
        Register one for free{" "}
      </Link>
    </section>
  );
}

export default Login;
