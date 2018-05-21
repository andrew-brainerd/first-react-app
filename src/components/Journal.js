import React, { Component } from 'react';
import Header from './common/Header';

export default class Journal extends Component {
    render() {
        return (
            <div>
                <Header />
                <h1>Welcome to your journal</h1>
            </div>
        )
    }
}