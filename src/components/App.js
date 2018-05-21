import React, { Component, PropTypes } from 'react';
import Header from './common/Header';
import Clock from './Clock';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Clock />
        {this.props.children}
      </div>
    );
  }
}