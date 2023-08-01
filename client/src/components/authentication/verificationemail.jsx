import * as React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
import CircularProgress from '@mui/material/CircularProgress'; // Import CircularProgress for the loading icon
import { CloseCircleFilled } from '@ant-design/icons'; //CloseCircleOutlined

export default function VerificationEmail() {
    const history = useNavigate();
    const location = useLocation();

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
    const [verificationCode, setVerificationCode] = useState('');
    const [verificationSent, setVerificationSent] = useState(false);
    const [verificationError, setVerificationError] = useState(false);
    const [isSendingVerification, setIsSendingVerification] = useState(false); // State for handling loading icon
    const email = location.state?.email;
    console.log(email);

    const handleSendVerification = async () => {
        setIsSendingVerification(true); // Show loading icon when sending verification code
        try {
            await axios.post('http://localhost:8000/verify', { email });
            setVerificationSent(true);
        } catch (error) {
            alert('Failed to send verification code.');
            console.error(error);
        } finally {
            setIsSendingVerification(false); // Hide loading icon after sending (whether success or error)
        }
    };

    const handleCheckConfirmationCode = async () => {
        if (!verificationCode) {
            alert("Please type your confirmation code before change password");
            return;
        }
        try {
            const response = await axios.post(
                "http://localhost:8000/checkconfirmationcode",
                {
                    confirmationCode: verificationCode,
                }
            );
            if (response.data === "success") {
                history("/signin", { state: { email } });
                alert("Sign up successfully");
            } else if (response.data === "notexist-code") {
                alert("Wrong Confirmation Code");
            } else {
                alert("Error occurs. Please try again later");
            }
        } catch (error) {
            console.error(error);
            alert("Error occurs. Please try again later");
        }
    };

    return (
        <>
            <div className="wrapper">
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
                                Verification Email
                            </Typography>
                            <Box
                                component="form"
                                noValidate
                                onSubmit={handleSubmit}
                                sx={{ mt: 3 }}
                            >
                                {verificationSent && (
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="verificationCode"
                                            label="Verification Code"
                                            name="verificationCode"
                                            autoComplete="verification-code"
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
                                        {isSendingVerification ? ( // Display loading icon when sending
                                            <CircularProgress size={24} style={{ color: 'white' }}/>
                                        ) : (
                                            "Send Verification Code"
                                        )}
                                    </Button>
                                )}
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                    onClick={handleCheckConfirmationCode}
                                >
                                    Sign Up
                                </Button>
                                {/* <Grid container justifyContent="flex-end">
                                    <Grid item>
                                        <Link href="/signin" variant="body2">
                                            Already have an account? Sign in
                                        </Link>
                                    </Grid>
                                </Grid> */}
                            </Box>
                        </Box>
                    </Container>
                </div>
            </div>
        </>
    );
}
