import React, { Component } from 'react';
import Greeting from './Greeting';
import Clock from './Clock.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Greeting name={this.props.name} />
        <Clock />
      </div>
    );
  }
}

export default App;