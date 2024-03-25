import React, { Component } from 'react';
 
export default class TernaryTest extends Component {
    constructor() {
        super();

        this.state = {
            secondTitle: "False",
            boolean: false
        }

        this.changeBoolean = this.changeBoolean.bind(this);
    };

    changeBoolean() {
        if (this.state.boolean) {
            this.setState({
                boolean: false
            })
        } else {
            this.setState({
                boolean: true
            })
        }
    }
 
    render() {
        return (
            <div>
                <h1>
                    { this.state.boolean ? <div>True</div> : <div>False</div>}
                </h1>
                <button onClick={() => {this.changeBoolean()}}>Click me for Boolean</button>

            </div>
        );
    }
}