import React, { Component } from 'react';
import { StatBox } from './StatBox.js'

export default class StatBar extends Component {
    render() {
        return (
            <div class='statBar grow'>
                <StatBox />
                <StatBox />
                <StatBox />
                <StatBox />
                <StatBox />
                <StatBox />
            </div>
        )
    }
}