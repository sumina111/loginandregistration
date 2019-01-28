import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import React, {Component} from 'react'
import RegistrationForm from '../registration/index'
import LoginForm from '../login/index'

class RouteLink extends Component{
    render(){
        return(
            <Router>
                <div>
                    <Switch>
                        <Route exact path = "/register" component = {RegistrationForm} />
                        <Route exact path = "/login" component = {LoginForm} />
                    </Switch>
                </div>
            </Router>
        )
    }
}
export default RouteLink;