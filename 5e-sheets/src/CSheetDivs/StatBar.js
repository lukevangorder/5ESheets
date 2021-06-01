import React, { Component } from 'react';
import { StatBox } from './StatBox.js'

export default class StatBar extends Component {
    render() {
        return (
            <div class='statBar grow'>
                <StatBox stat='Strength'/>
                <StatBox stat='Dexterity'/>
                <StatBox stat='Constitution'/>
                <StatBox stat='Intelligence'/>
                <StatBox stat='Wisdom'/>
                <StatBox stat='Charisma'/>
            </div>
        )
    }
}