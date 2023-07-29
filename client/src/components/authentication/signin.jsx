import * as React from "react";
import { useState } from "react";
import "./auth.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { message } from "antd";  
import IconButton from "@mui/material/IconButton";

import Closebutton from "./custom/closebutton";
import Role from "./custom/setrole";
import Background from "./custom/background";
import { useSelector } from "react-redux";
function SignIn() {
  const [showPassword, setShowPassword] = React.useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const role = useSelector((state) => state.role.role);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
      role: role,
    });
  };

  //--------------------------------------------------------------------------------
  const history = useNavigate();

  async function submit(e) {
    e.preventDefault();
    if (!email || !password) {
      message.warning("Please fill in all the information");
      return;
    }
    try {
      await axios
        .post("http://localhost:8000/signin", {
          email,
          password,
          role,
        })
        .then((res) => {
          if (res.data === "exist") {
            history("/t", { state: { id: email } });
            message.success("Login success");
          } else if (res.data === "notexist") {
            message.warning("User have not sign up or wrong password");
          }
        })
        .catch((e) => {
          message.error("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <>
      <div className="wrapper">
        <Background />
        <div className="wrapper_signin">
          {/* <Container component="main" maxWclassNameth="xs"> */}
          <Container component="main">
            <Closebutton />

            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="5">
                Sign in
              </Typography>
              <Role />

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
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  onClick={submit}
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="/reset-password" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/signup" variant="body2">
                      {"Don't have an account? Sign Up"}
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

export default SignIn;
