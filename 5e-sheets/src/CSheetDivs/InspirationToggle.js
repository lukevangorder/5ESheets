import React, { Component } from 'react';

export class InspirationToggle extends Component {
    constructor() {
        super()
        this.state = {
            toggle: ''
        }
    }

    handleToggle = () => {
        console.log('click')
        if (this.state.toggle == '') {
            this.setState({
                toggle: '*'
            })
        } else {
            this.setState({
                toggle: ''
            })
        }
    }
    
    render() {
        return (
            <div class='inspirationToggle cursorHover' onClick={this.handleToggle}>
                {this.state.toggle}
            </div>
        )
    }
}