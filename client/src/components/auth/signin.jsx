import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

import "./auth.scss";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      <Link color="inherit"></Link>
      {new Date().getHours()}:{new Date().getMinutes()}
    </Typography>
  );
}

function SignIn() {
  const [showPassword, setShowPassword] = React.useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <div className="wrapper_login">
      <ThemeProvider theme={createTheme()}>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>

            <Typography component="h1" variant="5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={toggleShowPassword}>
                      {showPassword ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </IconButton>
                  ),
                }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </ThemeProvider>
    </div>
  );
}

export default SignIn;
/*




*/

// const express = require("express");
// const collection = require("./config/dbConnect");
// const cors = require("cors");
// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors());

// app.get("/", cors(), (req, res) => {});

// // app.post("/",async(req,res)=>{
// //     const{email,password}=req.body

// //     try{
// //         const check=await collection.findOne({email:email})

// //         if(check){
// //             res.json("exist")
// //         }
// //         else{
// //             res.json("notexist")
// //         }

// //     }
// //     catch(e){
// //         res.json("fail")
// //     }

// // })

// app.post("/", async (req, res) => {
//   const { email, password } = req.body;

//   const data = {
//     email: email,
//     password: password,
//   };

//   try {
//     const check = await collection.findOne({ email: email });

//     if (check) {
//       res.json("exist");
//     } else {
//       res.json("notexist");
//       await collection.insertMany([data]);
//     }
//   } catch (e) {
//     res.json("fail");
//   }
// });

// app.listen(8000, () => {
//   console.log("port connected");
// });



// const mongoose = require("mongoose");
// mongoose
//   .connect("mongodb://localhost:27017/react-login-tut")
//   .then(() => {
//     console.log("mongodb connected");
//   })
//   .catch(() => {
//     console.log("failed");
//   });

// const newSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
// });

// const collection = mongoose.model("collection", newSchema);

// module.exports = collection;


// import "./login.scss";
// import React, { useEffect, useState } from "react"
// import axios from "axios"

// // function Login() {
// //   return (
// //     <>
// //       <div className="wrapper">
// //         <div className="login">
// //           <h2>Login</h2>
// //           <form action="#">
// //             <div className="input-box">
// //               <span className="icon">
// //                 <i class="fa-solid fa-envelope"></i>
// //               </span>
// //               <input type="email" placeholder="Username" required />
// //               <label>Email</label>
// //             </div>
// //             {/*  */}
// //             <div className="input-box">
// //               <span className="icon"></span>
// //               <i class="fa-solid fa-lock"></i>
// //               <input type="password" placeholder="password" required />
// //               <label>Password</label>
// //             </div>
// //             <div className="remember-forgot">
// //               <label>
// //                 <input type="checkbox" />
// //                 Remember me
// //               </label>
// //               <a href="#">Forgot Password</a>
// //             </div>

// //             <button type="submit">Login</button>
// //             <div className="login-register">
// //               <p> Don't have an account yet?
// //                 <a href="#" className="register-link"></a>
// //               </p>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }
// // export default Login;


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
// ... (Còn23 dòng dòng)