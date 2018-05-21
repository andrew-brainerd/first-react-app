import React, { Component } from 'react';
import Greeting from './components/Greeting';
import Clock from './components/Clock';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Greeting name={this.props.name} />
        <Clock />
      </div>
    );
  }
}