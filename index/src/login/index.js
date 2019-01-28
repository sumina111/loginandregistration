import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'

class LoginForm extends Component {
    constructor (props){
        super(props);
    }

    render(){
        return(
            <Form>

                <Form.Field>
                    <label>Email</label>
                    <input 
                        placeholder='Email'
                        type = 'email' 
                        name = 'email'/>
                </Form.Field>

                <Form.Field>
                    <label>Password</label>
                    <input 
                        placeholder='Password' 
                        type = 'password'
                        name = 'email'/>
                </Form.Field>

                <Button type='submit'>Login</Button>

            </Form>
        )
    }
}

export default LoginForm