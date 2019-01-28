import React from 'react'
import propTypes from 'prop-types'
import { Form, Button } from 'semantic-ui-react'

const RegistrationForm = (
        {
            data,
            errors,
            onSubmit,
            onChange,

        }) => ( <Form onSubmit = {onSubmit}>

                    <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name'
                    type = 'text' 
                    name = 'first_name'
                    value = {data.first_name || ''}
                    onChange = {onChange}/>
                    </Form.Field>
                
                    <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name'
                    type = 'text'
                    name = 'last_name' 
                    value = {data.last_name || ''}
                    onChange = {onChange}/>
                    </Form.Field>
                
                    <Form.Field>
                    <label>Email</label>
                    <input placeholder='Email'
                    type = 'email'
                    name = 'email' 
                    value = {data.email || ''}
                    onChange = {onChange}/>   
                    </Form.Field>
                
                    <Form.Field>
                    <label>Password</label>
                    <input placeholder='Password'
                    type = 'password'
                    name = 'password' 
                    value = {data.password || ''}
                    onChange = {onChange}/>
                    </Form.Field>
                
                    <Form.Field>
                    <label>Confirm Password</label>
                    <input placeholder='Confirm Password'
                    type = 'password'
                    name = 'confirm_password' 
                    value = {data.confirm_password || ''}
                    onChange = {onChange}/>
                    </Form.Field>
                
                    <Form.Field>
                    <label>Referral Code</label>
                    <input placeholder='Referral Code'
                    name = 'referral_code' 
                    value = {data.referral_code || ''}
                    onChange = {onChange}/>
                    </Form.Field>
                
                    <Button type='submit'>Submit</Button>
                
                </Form>
        );

        RegistrationForm.propTypes = {
            onSubmit: propTypes.func.isRequired,
            onChange: propTypes.func.isRequired,
            errors: propTypes.func.isRequired,
            data: propTypes.func.isRequired
        }
    
export default RegistrationForm;