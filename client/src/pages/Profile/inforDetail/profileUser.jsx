import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import "./infor.scss"; // Import custom CSS file

import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import bcrypt from "bcryptjs";
import { updateUser } from "../../../redux/features/userSilce";
import { message } from "antd";
function ProfileUser() {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(formData.entries());

    if (values.password !== values["confirm password"]) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(values.password, salt);
    const data = {
      _id: user._id,
      lastname: values.lastName,
      firstname: values.firstName,
      username: values.username,
      password: hashedPassword,
      email: values.email,
    };
    await axios
      .put(`${process.env.REACT_APP_API_PORT}/edituser`, data)
      .then((res) => {
        console.log(res.data);
        if (res.data === "updatedsuccess") {
          dispatch(updateUser({ email: data.email }));
          message.success("Update success");
          return;
        } else if (res.data === "updatedfail") {
          message.error("Update fail");
          return;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="profile-user">
      <Typography variant="h4" style={{ marginBottom: "40px" }}>
        Update User Information
      </Typography>
      <form name="profileForm" onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          name="lastName"
          label="Last Name"
          required
          placeholder={user.lastname}
          className="custom-form-item"
        />

        <TextField
          margin="normal"
          name="firstName"
          label="First Name"
          required
          placeholder={user.firstname}
          className="custom-form-item"
        />

        <TextField
          margin="normal"
          name="username"
          label="Username"
          placeholder={user.username}
          required
          className="custom-form-item"
        />

        <TextField
          margin="normal"
          required
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          id="password"
          className="custom-form-item"
          autoComplete="current-password"
          InputProps={{
            endAdornment: (
              <IconButton onClick={toggleShowPassword}>
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            ),
          }}
        />

        <TextField
          margin="normal"
          required
          name="confirm password"
          label="Confirm Password"
          type={showPassword ? "text" : "password"}
          id="confirm-password"
          className="custom-form-item"
          autoComplete="current-password"
          error={passwordError}
          helperText={passwordError ? "Passwords do not match" : ""}
          InputProps={{
            endAdornment: (
              <IconButton onClick={toggleShowPassword}>
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            ),
          }}
        />
        <TextField
          margin="normal"
          name="email"
          label="Email"
          type="email"
          placeholder={user.email}
          required
          className="custom-form-item"
        />
        <br />
        <Button type="submit" variant="contained" color="primary">
          Update
        </Button>
      </form>
    </div>
  );
}

export default ProfileUser;
