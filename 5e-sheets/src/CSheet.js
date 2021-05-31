import React, { Component } from 'react';
import { NameBar, StatBar, Inspiration, Proficiency, SavingThrows, Skills } from './CSheetDivs/DivsIndex'

export default class CSheet extends Component {
    render() {
        return (
            <div class='CSheet'>
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