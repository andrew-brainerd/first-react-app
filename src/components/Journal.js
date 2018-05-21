import React, { Component } from 'react';

export default class Journal extends Component {
    render() {
        return (
            <div className="header">
                <h1>Welcome to your journal, {this.props.name}</h1>
            </div>
        )
    }
}