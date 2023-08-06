import React, { useState } from "react";
import axios from "axios";
import "./auth.scss";
import { useNavigate } from "react-router-dom";
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

import Closebutton from "./custom/closebutton";
import Background from "./custom/background";
import { message } from "antd";

//----------------------------------------------------------------

function ResetPassword() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const history = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmationCode, setConfirmationCode] = useState("");
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSendVerificationCode = async () => {
    if (!email || !password || !confirmPassword) {
      message.error(
        "Please fill out the information before sending the email confirmation code"
      );
      return;
    }
    try {
      const response = await axios.post("http://localhost:8001/verify", {
        email,
      });
      if (response.data === "sendCodeSuccess") {
        message.success(
          "Send verification code successfully, please check your email"
        );
      } else if (response.data === "emailExist") {
        message.error("Email not exist");
      } else {
        message.error("Error occurs. Please try again later");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleResetPassword = async () => {
    if (password !== confirmPassword) {
      message.error("Password and confirm password must be the same");
      return;
    }
    if (!confirmationCode) {
      message.error("Please enter confirmation code");
      return;
    }
    try {
      await axios
        .post("http://localhost:8001/resetpassword", {
          email: email,
          password: password,
          confirmationCode: confirmationCode,
        })
        .then((res) => {
          if (res.data === "resetpasswordsuccess") {
            message.success("Reset password successfully");
            history("/signin");
          } else if (res.data === "resetpasswordfail") {
            message.error("Reset password failed, please try again later");
          }
        })
        .catch((err) => {
          message.error("Reset password failed");
          console.error(err);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="wrapper">
      <div id="rs_bg"><Background/></div>
      <div className="wrapper_reset">
        <ThemeProvider theme={createTheme()}>
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

              <Typography component="h1" variant="5">
                Reset Password
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
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  autoComplete="current-password"
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
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type={showPassword ? "text" : "password"}
                  id="confirmPassword"
                  value={confirmPassword}
                  autoComplete="confirm-password"
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
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

                <Button
                  fullWidth
                  variant="contained"
                  onClick={handleSendVerificationCode}
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

                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  onClick={handleResetPassword}
                  sx={{ mt: 3, mb: 2 }}
                >
                  Reset Password Now
                </Button>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Link href="/signup" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/signin" variant="body2">
                      {"Sign In"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default ResetPassword;
