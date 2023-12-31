import * as React from "react";
import { useState, useEffect } from "react";
import "./auth.scss";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
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
import { updateUser } from "../../redux/features/userSlice";
function SignIn() {
  //kich hoat api google cloud
  const googleClientId =
    "663009026233-04a1ja16hr8ik1qbu6d2rjef25h4vrlv.apps.googleusercontent.com";

  useEffect(() => {
    function start() {
      gapi.client.init({
        googleClientId: googleClientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });

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

  // console.log("sign in", role);
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
        .post(`${process.env.REACT_APP_API_PORT}/signin`, newdata)
        .then((res) => {
          if (res.data === "signinfail") {
            message.error("Sign in not success");
            return;
          } else {
            const verifyEmail = res.data.email;
            const verifyToken = res.data.accessToken;
            const verifyRole = res.data.role;
            message.success(`Sign in success with ${verifyRole} role`);
            dispatch(
              updateRole({
                role: verifyRole,
                token: verifyToken,
                email: verifyEmail,
              })
            );
            dispatch(
              updateUser({
                email: verifyEmail,
              })
            );
            navigate("/", { replace: true });
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

  const responseGoogle = async (response) => {
    try {
      const { profileObj, tokenId } = response;
      if (profileObj && profileObj.email) {
        const googleEmail = profileObj.email;
        const googleRole = "user"; // You can set the role here, e.g., "user"

        // Dispatch actions here to update role, email, and password

        try {
          const backendResponse = await axios.post(
            `${process.env.REACT_APP_API_PORT}/googleSignIn`,
            {
              email: googleEmail,
              role: googleRole,
            }
          );

          if (backendResponse.status === 200) {
            message.success(`Sign in success with ${googleRole} role`);
            console.log(profileObj);
            //console.log(tokenId);
            const verifyToken = backendResponse.data.accessToken;
            console.log(verifyToken);
            dispatch(
              updateRole({
                role: googleRole,
                token: verifyToken,
                email: googleEmail,
              })
            );
            dispatch(
              updateUser({
                email: googleEmail,
              })
            );
            // Navigate to the desired page
            navigate("/", { replace: true });
          } else {
            //console.log("Sign in failed:", backendResponse.status);
            message.error(`User not found`);
          }
        } catch (err) {
          console.log(err);
        }
      } else {
        console.log("Google profileObj or email is missing.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onFailure = (res) => {
    console.log("LOGIN FAILED! res:", res);
  };

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
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    margin: "0 auto",
                  }}
                >
                  <GoogleLogin
                    clientId={googleClientId}
                    buttonText="Sign In with Google"
                    onSuccess={responseGoogle}
                    onFailure={onFailure}
                    cookiePolicy={"single_host_origin"}
                  />
                </div>
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
