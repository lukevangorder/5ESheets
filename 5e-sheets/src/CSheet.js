import React, { Component } from 'react';
import { NameBar, StatBar } from './CSheetDivs/DivsIndex'

export default class CSheet extends Component {
    render() {
        return (
            <div class='CSheet'>
                <StatBar />
                <NameBar />
            </div>
        )
    }
}