import "./login.scss";
import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import profile from "../image/a.png"
import Email from "../image/email.jpg"
import pass from "../image/pass.png"

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


// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [rememberMe, setRememberMe] = useState(false);

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleRememberMeChange = (event) => {
//     setRememberMe(event.target.checked);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const userData = {
//       email: email,
//       password: password,
//       rememberMe: rememberMe,
//     };

//     axios
//       .post("http://localhost:8000/", userData) // Replace "/api/login" with your API endpoint
//       .then((response) => {
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   return (
//     <>
//     {/* <div className="wrapper">
//       <form onSubmit={handleSubmit}>
//         <label>
//           Email:
//           <input type="email" value={email} onChange={handleEmailChange} />
//         </label>
//         <br/>
//         <label>
//           Password:
//           <input 
//             type="password"
//             value={password}
//             onChange={handlePasswordChange}
//           />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//     </div> */}
//     <div className="login-container">
//       <form className="login-form" onSubmit={handleSubmit}>
//         <h2>Login</h2>
//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" value={email} onChange={handleEmailChange} />
//         <label htmlFor="password">Password:</label>
//         <input type="password" id="password" value={password} onChange={handlePasswordChange} />
//         <div className="remember-me">
//           <input type="checkbox" id="rememberMe" checked={rememberMe} onChange={handleRememberMeChange} />
//           <label htmlFor="rememberMe">Remember me</label>
//         </div>
//         <button type="submit">Sign In</button>
//       </form>
//     </div>
//     </>
//   );
// }
// export default Login;

function Login() {

  const history=useNavigate();

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  async function submit(e){
      e.preventDefault();

      try{

          await axios.post("http://localhost:8000/",{
              email,password
          })
          .then(res=>{
              if(res.data=="exist"){
                history("/home",{state:{id:email}})
              }
              else if(res.data=="notexist"){
                alert("User have not sign up or wrong password")
              }
          })
          .catch(e=>{
              alert("wrong details")
              console.log(e);
          })

      }
      catch(e){
          console.log(e);

      }

  }


  return (
    <div className="mainLogin">
        <div className="sub-mainLogin">
           
            <div>
                <div className="imgs">
                    <div className="container-image">
                        <img src={profile} alt="profile" className="profile"/>
                    </div>
                </div>
                <div>
                    <h1>Login</h1>
                    <form action="POST">
                        <div>
                            <img src={Email} alt="Email" className="Email"/>
                            <input id="inputfield" type="text" className="name" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" required />
                        </div>
                        <div className="second-input">
                            <img src={pass} alt="pass" className="Email"/>
                            <input id="inputfield" type="password" className="name" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} required/>
                        </div>
                        <div className="login-button">
                            <input type="submit" className="buttonlogin" onClick={submit} />
                        </div>
                    </form>

                    <br />
                    <p>OR</p>
                    

                    <Link to="/signup">Signup Page</Link>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Login
