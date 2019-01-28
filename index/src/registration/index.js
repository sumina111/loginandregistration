import React, { Component } from 'react';
import RegistrationForm from './form';
import submitRegistration from '../api/registration';
import { connect } from 'react-redux';
import { registrationRequest, registrationSuccess} from './action'
// import { }

class SignUp extends Component {
    constructor(props){
        super(props);

        this.state = {
            errors: {},
            data: {
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                confirm_password: '',
                referral_code: ''
            }
        };
    }

    register = Data => {
        console.log('eta pugyo')
        return submitRegistration(Data)
    }

    onSubmit = e => {
        e.preventDefault();
        const {first_name, last_name, email, password, confirm_password, referral_code} = this.state.data;
        const errors = this.validate();
        this.register(this.state.data);
    }

    validate = () => {
        const { data } = this.state;
        const errors = {};
        if (!data.first_name) errors.first_name = "Field is empty";
        this.ValidateName();
        if (!data.last_name) errors.last_name = "Field is empty";
        this.ValidateName();
        if (!data.email) errors.email = "Field is empty";
        this.ValidateEmail();
        if(!data.password) errors.password = "Field is empty";
        this.ValidatePassword();
        if(!data.confirm_password) errors.confirm_password = "Field is empty";
        this.CheckPassword();
        if(!data.referral_code) errors.referral_code = "Field is empty";
        return errors;
    };

    ValidateName = () => {
        const rgx = /^[a-zA-Z]+$/;
        if( rgx.test(this.state.data.first_name ) && rgx.test(this.state.data.last_name))
        {
            return (true)
        }
        else{
            return (false)
        }
    }

    ValidateEmail = () => {
        const rgx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if( rgx.test(this.state.data.email))
        {
            return (true)
        }
        alert("invalid email")  
            return (false)
    }

    ValidatePassword = () => {
        const rgx =  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        if( rgx.test(this.state.data.password))
        {
            return (true)
        }
        alert("password must contain one number, one lowercase, one uppercase, atleast 6 characters")
        return (false)
    }

    CheckPassword = () => {
        if( this.state.data.password !== this.state.data.confirm_password)
        {
            alert("password should match")
        }
    }

    onChange = e => {
        const field = e.target.name;
        const data = this.state.data;
        data[field] = e.target.value;
        this.setState({
            data
        });
    }

    render() {
        return (
            <RegistrationForm
                onSubmit = {this.onSubmit}
                onChange = {this.onChange}
                errors = {this.state.errors}
                data = {this.state.data}
            />
        );
    }

}

const mapDispatchToProps = dispatch => {
    return {
        registrationSuccess: (data) => dispatch(registrationSuccess(data)),
        registrationRequest: (first_name, last_name, email, password, confirm_password, referral_code) => dispatch(registrationRequest(first_name, last_name, email, password, confirm_password, referral_code))
    }
}

export default connect (mapDispatchToProps)(SignUp);