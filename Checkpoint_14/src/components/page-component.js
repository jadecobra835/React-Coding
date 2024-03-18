import React, { Component } from 'react';

 
export default class Page extends Component {
    // This is how we accept the props
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <h1>Hi there</h1>
                {/* This is how we can use the props */}
                <button onClick={this.props.title}>New Title</button>
            </div>
        );
    }
}