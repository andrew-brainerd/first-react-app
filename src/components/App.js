import React, { Component } from 'react';
import Greeting from './Greeting';
import Clock from './Clock';
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