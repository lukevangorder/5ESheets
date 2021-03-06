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
        if (newStat < 21) {
            this.setState({
                value: newStat
            })
        }
    }

    handleDecrease = () => {
        const newStat = this.state.value - 1
        if (newStat >= 0) {
            this.setState({
                value: newStat
            })
        }
    }

    render() {
        return (
            <div class='statBox'>
                <div class='statBoxLabel'>
                    {this.props.stat}
                    <a class='cursorHover' onClick={this.handleDecrease}>  -  </a>
                    <a class='cursorHover' onClick={this.handleIncrease}>  +  </a>
                </div>
                <div class='statBoxStat'>{this.state.value}</div>
            </div>
        )
    }
}