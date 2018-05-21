import React, { Component } from 'react';
import Clock from './Clock.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>,
      <Clock />
    );
  }
}

export default App;