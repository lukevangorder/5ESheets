import React, { Component } from 'react';
import { NameBar, StatBar, Inspiration, Proficiency, SavingThrows, Skills, HitPoints } from './CSheetDivs/DivsIndex'

export default class CSheet extends Component {
    render() {
        return (
            <div class='CSheet'>
                <HitPoints />
                <Skills />
                <SavingThrows />
                <Inspiration />
                <Proficiency />
                <StatBar />
                <NameBar />
            </div>
        )
    }
}