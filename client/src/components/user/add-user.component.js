import React, {Component} from 'react'
import UserDataService from '../../services/UserDataService';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import { Button } from '@material-ui/core';
import PhoneInput from 'react-phone-input-2';
import './style.css'
import TextFieldFull from './TextFieldFull';
import PasswordField from './PasswordField';

function BackButton() {
    const navigate = useNavigate();
    return(
        <Button
        variant='contained'
        onClick={() => {
            navigate(-1);
        }}>
            Back
        </Button>
    )
}

export default class AddUser extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: "",
            email: "",
            firstname: "",
            lastname: "",
            phonenumber: "",
            firstnameValid: false,
            lastnameValid: false,
            emailValid: false,
            usernameValid: true,
            passwordValid: true,
            phonenumberValid: true,
        }
        this.changeUsername = this.changeUsername.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changeFirstName = this.changeFirstName.bind(this);
        this.changeLastName = this.changeLastName.bind(this);
        this.changePhoneNumber = this.changePhoneNumber.bind(this);
        this.isValidEmail = this.isValidEmail.bind(this);
        this.isValidUsername = this.isValidUsername.bind(this);
        this.isValidFirstName = this.isValidFirstName.bind(this);
        this.isValidLastName = this.isValidLastName.bind(this);
        this.isValidPhoneNumber = this.isValidPhoneNumber.bind(this);
        this.isValidPassword = this.isValidPassword.bind(this);
    }

    
    changeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    changePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    changeEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    changeFirstName = (event) => {
        this.setState({
            firstname: event.target.value
        })
    }
    changeLastName = (event) => {
        this.setState({
            lastname: event.target.value
        })
    }
    changePhoneNumber = (value) => {
        this.setState({
            phonenumber: value
        })
    }
    isValidFirstName = (firstname) => {
        const hasError = (firstname) ? (firstname === '') : true;
        const error = (hasError) ? 'Must not be empty' : ''
        this.setState({
            firstnameValid: !hasError
        })
        return {hasError, error};
    }
    isValidLastName = (lastname) => {
        const hasError = (lastname) ? (lastname === '') : true;
        const error = (hasError) ? 'Must not be empty' : ''
        this.setState({
            lastnameValid: !hasError
        })
        return {hasError, error};
    }
    isValidEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
        const hasError = !regex.test(email);
        const error = (hasError) ? 'Not a valid email' : '';
        this.setState({
            emailValid: !hasError
        })
        return {hasError, error};
    }
    isValidUsername(username) {
        const hasError = false;
        const error = '';
        this.setState({
            usernameValid: !hasError
        })
        return {hasError, error};
    }
    isValidPassword(password) {
        const hasError = false;
        const error = '';
        this.setState({
            passwordValid: !hasError
        })
        return {hasError, error};
    }
    isValidPhoneNumber(phonenumber) {
        const hasError = false;
        const error = '';
        this.setState({
            phonenumberValid: !hasError
        })
        return {hasError, error};
    }
    // export function isAValidPhoneNumber(number) {
    //     const phoneNumber = parsePhoneNumber(' 8 (800) 555-35-35 ', 'RU')
    //     const hasError = phoneNumber ? !phoneNumber.isPossible() : true;
    //     const error = (hasError) ? 'Not a valid phone number' : '';
    //     return {hasError, error};
    // }
    newAccount() {
        this.setState({
            id: null,
            username: "",
            password: "",
            email: "",
            firstname: "",
            lastname: "",
            phonenumber: ""
        })
    }
    addUser = () => {
        var data = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            phonenumber: this.state.phonenumber
        }
        UserDataService.create(data);
    }
    render(){
        let valid = false;
        return(
            <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1 },
            }}
            noValidate
            autoComplete="off"
            onChange={() => {
                valid = this.state.firstnameValid 
                && this.state.lastnameValid
                && this.state.emailValid
                && this.state.usernameValid
                && this.state.passwordValid
                && this.state.phonenumberValid;
                console.log(valid)
            }}
            >
                <TextFieldFull
                id="firstname" 
                label="First name" 
                variant="outlined"
                width='100ch'
                check={this.isValidFirstName}
                changeValue={this.changeFirstName}
                />
                <TextFieldFull 
                id="lastname" 
                label="Last name" 
                variant="outlined"
                check={this.isValidLastName}
                changeValue={this.changeLastName}
                />
                <TextFieldFull
                id="email" 
                label="Email" 
                variant="outlined"
                check={this.isValidEmail}
                changeValue={this.changeEmail}
                />
                <TextFieldFull
                id="username" 
                label="Username" 
                variant="outlined"
                check={this.isValidUsername}
                changeValue={this.changeUsername}
                />
                <PasswordField
                changeValue={this.changePassword}
                />
                <PhoneInput
                    name="multipleErrorInput4"
                    autoCorrect="off"
                    placeholder="Enter a Valid Phone Number"
                    country={"gb"}
                    value={this.state.phonenumber}
                    onChange={this.changePhoneNumber}
                />
                <Button
                disabled={!valid}
                variant='contained'
                onClick={this.addUser}>
                    Create new user 
                </Button>
                <BackButton/>
            </Box>
        )
    }
}