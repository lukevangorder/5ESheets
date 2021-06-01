import React, { Component } from 'react';

export class StatBox extends Component {
    
    constructor() {
        super()
        this.state = {
            value: 10
        }
    }

    handleIncrease = () => {
        const newStat = this.state.value + 1
        this.setState({
            value: newStat
        })
    }

    handleDecrease = () => {
        const newStat = this.state.value - 1
        this.setState({
            value: newStat
        })
    }

    render() {
        return (
            <div class='statBox grow'>
                <div class='statBoxStat'>{this.state.value}</div>
                <div class='statBoxLabel'>
                    {this.props.stat}
                    <a class='cursorHover' onClick={this.handleDecrease}>  -  </a>
                    <a class='cursorHover' onClick={this.handleIncrease}>  +  </a>
                </div>
            </div>
        )
    }
}