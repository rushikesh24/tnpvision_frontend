import React from 'react';
import {Button, MenuItem} from '@material-ui/core';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {withRouter} from 'react-router-dom';
//import candidateService from './../../services/candidate.service';

const roles = [
    {
      value: 'none',
      label: 'None',
    },
    {
      value: 'student',
      label: 'Student',
    },
    {
      value: 'faculty',
      label: 'Faculty',
    },
    {
      value: 'tnpofficer',
      label: 'TnP Officer',
    },
  ];
class RegisterContent extends React.Component {
 
    state = {
        user: {
            firstname: '',
            middlename: '',
            lastname: '',
            email: '',
            password: '',
            repeatPassword: '',
            role:''
        },
    };
    
    componentDidMount() {
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            if (value !== this.state.user.password) {
                return false;
            }
            return true;
        });
    }
 
    handleChange = (event) => {
        const { user } = this.state;
        user[event.target.name] = event.target.value;
        this.setState({ user });
    }
 
    handleSubmit = () => {
        const { user } = this.state;
        console.log(user);
        /*console.log(user.firstname);
        console.log(user.middlename);
        console.log(user.lastname);
        console.log(user.email);
        console.log(user.password);
        console.log(user.repeatPassword);
        console.log(user.role);*/
        //this.saveUser(user);
    }

    /*saveUser = (user) =>{
        candidateService.create(user)
        .then(Response=>{console.log("Data uploaded")})
        .catch(e=>{console.log(e)})
    }*/
    handleRegister = () =>{
        const {user} = this.state;

        const selectedRole = user.role;

        if(selectedRole==='student'){
            const {history} = this.props;
            history.push('/StudentRegistration')
        }
        else if(selectedRole==='faculty'){
            const {history} = this.props;
            history.push('/FacultyRegistration') 
        }
        else if(selectedRole==='tnpofficer'){
            const {history} = this.props;
            history.push('/TPORegistration')
        }
    }
    
    render() {
        const { user } = this.state;
        return (
            <ValidatorForm onSubmit={this.handleRegister}>
                <TextValidator
                    autoFocus
                    required
                    fullWidth
                    variant="outlined"
                    size="small"
                    label="First Name"
                    onChange={this.handleChange}
                    name="firstname"
                    type="text"
                    validators={['required']}
                    errorMessages={['This field is required']}
                    value={user.firstname}
                />
                <br/>
                <TextValidator
                    required
                    fullWidth
                    variant="outlined"
                    size="small"
                    label="Middle Name"
                    onChange={this.handleChange}
                    name="middlename"
                    type="text"
                    validators={['required']}
                    errorMessages={['This field is required']}
                    value={user.middlename}
                />
                <br/>
                <TextValidator
                    required
                    fullWidth
                    variant="outlined"
                    size="small"
                    label="Last Name"
                    onChange={this.handleChange}
                    name="lastname"
                    type="text"
                    validators={['required']}
                    errorMessages={['This field is required']}
                    value={user.lastname}
                />
                <br/>
                <TextValidator
                    required
                    fullWidth
                    variant="outlined"
                    size="small"
                    label="Email Address"
                    onChange={this.handleChange}
                    name="email"
                    type="email"
                    validators={['isEmail','required']}
                    errorMessages={['Invalid Email Address','This field is required']}
                    value={user.email}
                />
                <br/>
                <TextValidator
                    required
                    fullWidth
                    variant="outlined"
                    size="small"
                    label="Password"
                    onChange={this.handleChange}
                    name="password"
                    type="password"
                    validators={['required']}
                    errorMessages={['This field is required']}
                    value={user.password}
                />
                <br/>
                <TextValidator
                    required
                    fullWidth
                    variant="outlined"
                    size="small"
                    label="Repeat password"
                    onChange={this.handleChange}
                    name="repeatPassword"
                    type="password"
                    validators={['isPasswordMatch', 'required']}
                    errorMessages={['Password mismatch', 'This field is required']}
                    value={user.repeatPassword}
                />
                <br/>
                <TextValidator
                    fullWidth
                    required
                    id="role"
                    size="small"
                    name='role'
                    label="Register As"
                    select
                    value={user.role}
                    variant="outlined"
                    onChange={this.handleChange}
                >
                {roles.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
                </TextValidator>
                <br/>
                <Button color="primary" variant="contained" type="submit" onClick={this.handleSubmit}>Proceed</Button>
                <br/>
            </ValidatorForm>
            
        );
    }
}

export default withRouter(RegisterContent);