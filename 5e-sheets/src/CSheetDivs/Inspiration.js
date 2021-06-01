import React, { Component } from 'react';
import { InspirationToggle } from './InspirationToggle.js'

export default class Inspiration extends Component {
    render() {
        return (
            <div class='inspiration  grow'>
                Inspiration
                <InspirationToggle />
            </div>
        )
    }
}