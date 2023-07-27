import * as React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import { CloseCircleFilled } from '@ant-design/icons'; //CloseCircleOutlined

export default function SignUp() {
    const history = useNavigate();

    const handleSubmit = (event) => {
      event.preventDefault();
      // const data = new FormData(event.currentTarget);
      // console.log({
      //   email: data.get("email"),
      //   password: data.get("password"),
      // });
    };

    const [showPassword, setShowPassword] = React.useState(false);

    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    };

    //--------------------------------------------------------------------------------
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [verificationCode, setVerificationCode] = useState('');
    const [verificationSent, setVerificationSent] = useState(false);
    const [verificationError, setVerificationError] = useState(false);

    // const handleSendVerification = async () => {
    //     try {
    //         if (!email) {
    //             alert('Please enter your email first.');
    //             return;
    //         }

    //         await axios.post('http://localhost:8000/verify', { email });
    //         setVerificationSent(true);
    //     } catch (error) {
    //         alert('Failed to send verification code.');
    //         console.error(error);
    //     }
    // };


    async function submit(e) {
      e.preventDefault();
      if (!firstname || !lastname || !email || !password || !phonenumber) {
        alert("Please fill in all the information");
        return;
      }

      try {
        await axios
          .post("http://localhost:8000/register", {
            firstname,
            lastname,
            email,
            password,
            phonenumber,
          })
          .then((res) => {
            if (res.data === "success") {
                history("/verification-email", { state: { email } });
            } else if (res.data === "exist") {
              alert("User already exists");
            }
          })
          .catch((e) => {
            alert("wrong details");

            console.log(e);
          });
      } catch (e) {
        console.log(e); 
      }
    }
    return (
        <>
            <div className="wrapper_paper">
                <div className="background">sadf</div>

                <div className="wrapper_signup">
                    {/* <ThemeProvider theme={defaultTheme}> */}
                    <Container component="main" maxWidth="xs">
                        <CloseCircleFilled
                            className="close"
                            onClick={() => history('/')}
                        />
                        <Box
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
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
                                <form action="POST">
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
                                                    setFirstname(
                                                        e.target.value,
                                                    );
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
                                                type={
                                                    showPassword
                                                        ? 'text'
                                                        : 'password'
                                                }
                                                id="password"
                                                autoComplete="new-password"
                                                onChange={(e) => {
                                                    setPassword(e.target.value);
                                                }}
                                                InputProps={{
                                                    endAdornment: (
                                                        <IconButton
                                                            onClick={
                                                                toggleShowPassword
                                                            }
                                                        >
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
                                                id="phonenumber"
                                                label="Phone Number"
                                                name="phonenumber"
                                                autoComplete="phonenumber"
                                                onChange={(e) => {
                                                    setPhonenumber(
                                                        e.target.value,
                                                    );
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        value="allowExtraEmails"
                                                        color="primary"
                                                    />
                                                }
                                                label="I want to receive inspiration, marketing promotions and updates via email."
                                            />
                                        </Grid>
                                    </Grid>
                                </form>
                                {/* {verificationSent && (
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="verificationCode"
                                            label="Verification Code"
                                            name="verificationCode"
                                            autoComplete="verification-code"
                                            //onChange={(e) => setVerificationCode(e.target.value)}
                                            onChange={(e) => {
                                                setVerificationCode(e.target.value);
                                                setVerificationError(false); // Clear verification error on input change
                                            }}
                                        />
                                    </Grid>
                                )}
                                {!verificationSent && (
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                        onClick={handleSendVerification}
                                    >
                                        Send Verification Code
                                    </Button>
                                )} */}
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
