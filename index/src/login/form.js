import React from 'react';
import Proptypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react'

const LoginForm = () => (
  <Form>
    <Form.Field>
      <label>Email</label>
      <input placeholder='Email'
      type = 'email' />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder='Password' 
      type = 'password'/>
    </Form.Field>
    <Button type='submit'>Login</Button>
  </Form>
)

export default LoginForm