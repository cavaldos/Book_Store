import React, {Component} from 'react'
import UserDataService from '../../services/UserDataService';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FormControl, InputLabel, OutlinedInput, InputAdornment } from '@material-ui/core';

export default class AddUser extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: "",
            email: "",
            firstname: "",
            lastname: "",
            phonenumber: ""
        }
        
        this.changeUsername = this.changeUsername.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changeFirstName = this.changeFirstName.bind(this);
        this.changeLastName = this.changeLastName.bind(this);
        this.changePhoneNumber = this.changePhoneNumber.bind(this);
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
    changePhoneNumber = (event) => {
        this.setState({
            phonenumber: event.target.value
        })
    }
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
    addAccount = () => {
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
        return(
            <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
                {/* <label>First name:<input
                    type='text'
                    value={this.state.firstname}
                    onChange={this.changeFirstName}/>
                </label>
                
                <label>Last name:<input
                    type='text'
                    value={this.state.lastname}
                    onChange={this.changeLastName}/>    
                </label>

                <label>Email:<input
                    type='text'
                    value={this.state.email}
                    onChange={this.changeEmail}/>
                </label>

                <label>Username:<input
                    type='text'
                    value={this.state.username}
                    onChange={this.changeUsername}/>
                </label>

                <label>Password:<input
                    type='text'
                    value={this.state.password}
                    onChange={this.changePassword}/>
                </label>

                <button onClick={this.addAccount}>
                    Create new account
                </button> */}

                <TextField 
                id="firstname" 
                label="First name" 
                variant="outlined"
                value={this.state.firstname}
                onChange={this.changeFirstName}
                />
                <TextField 
                id="lastname" 
                label="Last name" 
                variant="outlined"
                value={this.state.lastname}
                onChange={this.changeLastName}
                />
                <TextField 
                id="email" 
                label="Email" 
                variant="outlined"
                value={this.state.email}
                onChange={this.changeEmail}
                />
                <TextField
                id="username" 
                label="Username" 
                variant="outlined"
                value={this.state.username}
                onChange={this.changeUsername}
                />
                <TextField
                fullWidth
                id="phonenumber" 
                label="Phonenumber" 
                variant="outlined"
                value={this.state.phonenumber}
                onChange={this.changePhoneNumber}
                />

            </Box>
        )
    }
}