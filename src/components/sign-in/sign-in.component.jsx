
import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.state({[name]: value })
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email:'', password:''})
    }


    render () {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit = {this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email" 
                        value={this.state.email} 
                        handleChange = {this.handleChange}
                        label ="email"
                        reqired
                    />

                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password}
                        handleChange={this.handleChange} 
                        label="password"
                        reqired
                    />

                    <CustomButton type="submit">SIGN IN</CustomButton>
                </form>
            </div>
        );
    }

}

export default SignIn;