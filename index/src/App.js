import React, { Component } from 'react';
import RouteLink from './route/index';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="App">
        <RouteLink />
      </div>
    );
  }
}

export default App;
