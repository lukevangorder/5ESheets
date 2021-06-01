import React, { Component } from 'react';
import { NameBar, StatBar, Inspiration, Proficiency, SavingThrows, Skills, HitPoints, Attacks, Inventory, FeaturesAndTraits, PsAndLs, Spellbook } from './CSheetDivs/DivsIndex'

export default class CSheet extends Component {
    render() {
        return (
            <div class='CSheet'>
                <Spellbook />
                <PsAndLs />
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