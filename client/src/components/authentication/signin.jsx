import * as React from 'react';
import { useState } from 'react';
// import { useForm } from "react-hook-form"
import axios from 'axios';
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

import './auth.scss';

function SignIn() {
    const [showPassword, setShowPassword] = React.useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    //--------------------------------------------------------------------------------
    const history = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();
        if (!email || !password) {
            alert('Please fill in all the information');
            return;
        }
        try {
            await axios
                .post('http://localhost:8000/auth/signin', {
                    email,
                    password,
                })
                .then((res) => {
                    if (res.data === 'exist') {
                        history('/t', { state: { id: email } });
                    } else if (res.data === 'notexist') {
                        alert('User have not sign up or wrong password');
                    }
                })
                .catch((e) => {
                    alert('wrong details');
                    //alert("User have not sign up or wrong password");

                    console.log(e);
                });
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <div className="wrapper_paper">
                <div className="background">background</div>
                <div className="wrapper_signin">
                    <Container component="main" maxWclassNameth="xs">
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
                            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <LockOutlinedIcon />
                            </Avatar> */}

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
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                    InputProps={{
                                        endAdornment: (
                                            <IconButton
                                                onClick={toggleShowPassword}
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
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value="remember"
                                            color="primary"
                                        />
                                    }
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
                                        <Link
                                            href="/reset-password"
                                            variant="body2"
                                        >
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link
                                            href="/signup"
                                            variant="body2"
                                        >
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
