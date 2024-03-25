import React, { Component } from 'react';
import Page from './page-component';
import FuncPage from './functional';
import TernaryTest from './Checkpoint17';

export default class App extends Component {
  constructor() {
    super()

    // This is how you set the state
    this.state = {
      title: 'My First Title'
    }

    // This is how you bind this.
    this.changeState = this.changeState.bind(this);
  }

  // This is the prop we will be passing.
  changeState() {
    this.setState({
      title: 'My New Title'
    });
  }


  
  render() {
    return (
      <div className='app'>
        {/* This is how you pass the prop */}
        <Page title={this.changeState}/>
        <h2>
          { this.state.title }
        </h2>
        <h3>
          <FuncPage title={this.changeState}/>
        </h3>

        <TernaryTest />
      </div>
    );
  }
}
