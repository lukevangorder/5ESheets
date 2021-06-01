import React, { Component } from 'react';

export class StatBox extends Component {
    
    constructor() {
        super()
        this.state = {
            value: 10
        }
    }
    render() {
        return (
            <div class='statBox grow'>
                <div class='statBoxStat'>{this.state.value}</div>
                <div class='statBoxLabel'>{this.props.stat}</div>
            </div>
        )
    }
}