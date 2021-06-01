import React, { Component } from 'react';
import { NameBar, StatBar, Inspiration, Proficiency, SavingThrows, Skills, HitPoints, Attacks, Inventory, FeaturesAndTraits } from './CSheetDivs/DivsIndex'

export default class CSheet extends Component {
    render() {
        return (
            <div class='CSheet'>
                <FeaturesAndTraits />
                <Inventory />
                <Attacks />
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