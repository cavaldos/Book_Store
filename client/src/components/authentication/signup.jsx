import * as React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./auth.scss";

import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { message } from "antd";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import Closebutton from "./custom/closebutton";
import Background from "./custom/background";

export default function SignUp() {
  const [showPassword, setShowPassword] = React.useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const history = useNavigate();

  //--------------------------------------------------------------------------------
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const [role, setRole] = useState("");
  const [confirmationCode, setConfirmationCode] = useState("");

  const sendCodeSignUp = async () => {
    console.log("sendCodeSignUp", email, password, confirmpassword);
    if (password !== confirmpassword) {
      message.error("Password and Confirm Password must be the same");
      return;
    }
    if (!email || !password || !confirmpassword) {
      message.error(
        "Please fill out the information before sending the email confirmation code"
      );
      return;
    }
    try {
      await message.loading("Sending verification code...", 1);
      const response = await axios.post(
        "http://localhost:8001/verifyemailsignup",
        {
          email,
        }
      );
      if (response.data === "sendemailsuccess") {
        message.success(
          "Send verification code successfully, please check your email"
        );
      } else if (response.data === "emailExist") {
        message.error("Email already exists, please try again");
      } else {
        message.error("Error occurs. Please try again later");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };

  const newdata = {
    firstname,
    lastname,
    email,
    password,
    confirmpassword,
    role,
    confirmationCode,
  };
  async function submit(e) {
    e.preventDefault();

    if (!firstname) {
      message.error("First Name is required");
      return;
    }
    if (!lastname) {
      message.error("Last Name is required");
      return;
    }
    if (!email) {
      message.error("Email is required");
      return;
    }
    if (!password) {
      message.error("Password is required");
      return;
    }
    if (!confirmpassword) {
      message.error("Confirm Password is required");
      return;
    }

    if (!role) {
      message.error("Role is required");
      return;
    }
    if (password !== confirmpassword) {
      message.error("Password and Confirm Password must be the same");
      return;
    }

    try {
      await axios
        .post(`http://localhost:8001/register`, newdata)
        .then((res) => {
          if (res.data === "confirmationCodefail") {
            message.error("Confirmation Code is not correct,pelase send again");
          } else if (res.data === "RegisterUserSuccess") {
            message.success("Register successfully with user role");
            setTimeout(() => {
              history("/login");
            }, 2000);
          } else if (res.data === "RegisterEmployeesUccess") {
            message.success("Register successfully with employee role");
            setTimeout(() => {
              history("/login");
            }, 2000);
          } else if (res.data === "RegisterFail") {
            message.error("Register failed1");
          }
        })
        .catch((err) => {
          message.error("Register Failed2");
          console.log(err);
        });
    } catch (e) {
      console.log(e);
      message.error("Register failed3");
    }
  }
  return (
    <>
      <div className="wrapper">
        <div id="su_bg"><Background /></div>
  
        <div className="wrapper_signup">
          <Container component="main" maxWidth="xs">
            <Closebutton />
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
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                      onChange={(e) => {
                        setFirstname(e.target.value);
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                      onChange={(e) => {
                        setLastname(e.target.value);
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type={showPassword ? "text" : "password"}
                      id="password"
                      autoComplete="new-password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
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
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="confirmpassword"
                      label="ConfirmPassword"
                      type={showPassword ? "text" : "password"}
                      id="password"
                      autoComplete="confirm-password"
                      onChange={(e) => {
                        setConfirmpassword(e.target.value);
                      }}
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
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl style={{ marginTop: "20px" }} fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Role
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={role}
                        label="Role"
                        onChange={(e) => {
                          setRole(e.target.value);
                        }}
                      >
                        <MenuItem value={"user"}>User</MenuItem>
                        <MenuItem value={"employee"}>Employee</MenuItem>
                      </Select>
                    </FormControl>
                    <Button
                      fullWidth
                      variant="contained"
                      onClick={sendCodeSignUp}
                      sx={{ mt: 1, mb: 2 }}
                    >
                      Send Code to Email
                    </Button>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="confirmationCode"
                      label="Verification Code"
                      name="confirmationCode"
                      autoComplete="confirmationCode"
                      value={confirmationCode}
                      onChange={(e) => setConfirmationCode(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox value="allowExtraEmails" color="primary" />
                      }
                      label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                  </Grid>
                </Grid>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={submit}
                >
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="/signin" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </div>
      </div>
    </>
  );
}
