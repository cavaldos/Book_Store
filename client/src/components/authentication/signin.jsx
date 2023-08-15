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
import { useDispatch, useSelector } from "react-redux";
import LoadingCustom from "./custom/loading";
import { updateRole } from "../../redux/features/roleSlice";
import { updateUser } from "../../redux/features/userSilce";
function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };

  console.log("sign in", role);
  const newdata = { role, email, password };
  async function submit(e) {
    e.preventDefault();
    if (!email) {
      message.error("Email is required");
      return;
    }
    if (!password) {
      message.error("Password is required");
      return;
    }
    if (!role) {
      message.error("Role is required");
      return;
    }

    try {
      await axios
        .post(`http://localhost:8001/signin`, newdata)
        .then((res) => {
          if (res.data === "adminsuccess") {
            message.success("Sign in success with admin role");
            setTimeout(() => {
              dispatch(
                updateRole({
                  role: role,
                  roleRouter: role,
                  email: email,
                  password: password,
                })
              );
              dispatch(updateUser({ email: email }));
            }, 100);

            navigate("/");
          } else if (res.data === "usersuccess") {
            message.success("Sign in success with user role");
            setTimeout(() => {
              dispatch(
                updateRole({
                  role: role,
                  roleRouter: role,
                  email: email,
                  password: password,
                })
              );
              dispatch(updateUser({ email: email }));
            }, 100);
            navigate("/");
          } else if (res.data === "employeesuccess") {
            message.success("Sign in success with employee role");
            setTimeout(() => {
              dispatch(
                updateRole({
                  role: role,
                  roleRouter: role,
                  email: email,
                  password: password,
                })
              );
              dispatch(updateUser({ email: email }));
            }, 100);
            navigate("/");
          } else {
            message.error("Sign In not success");
          }
        })
        .catch((e) => {
          message.error("Sign in not success");
          console.log(e);
        });
    } catch (err) {
      console.log(err);
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
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Role</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={role}
                    label="Role"
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <MenuItem value={"user"}>User</MenuItem>
                    <MenuItem value={"employee"}>Employee</MenuItem>
                    <MenuItem value={"admin"}>Admin</MenuItem>
                  </Select>
                </FormControl>

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
          <LoadingCustom />
        </div>
      </div>
    </>
  );
}

export default SignIn;
