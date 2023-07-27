import React, {Component} from 'react'
import { TextField } from "@material-ui/core";
import { useNavigate } from 'react-router-dom';

export default class TextFieldFull extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
        value: '',
        hasError: false,
        error: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({value: event.target.value})
    
        if (this.props.changeValue) {
            this.props.changeValue(event)
        }
    
        const res = this.props.check(this.state.value)
        this.setState({
            hasError: res.hasError,
            error: res.error
        })
    }
    
    render() {
        const { id, label, fullWidth, ...restProps  } = this.props;
        return(
            <TextField
                fullWidth={fullWidth} {...restProps}
                id={id} 
                label={label}
                variant="outlined"
                value={this.state.value}
                onChange={this.handleChange}
                error={this.state.hasError}
                helperText={this.state.error}
            />
        )
    }
}