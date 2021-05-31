import React, { Component } from 'react';
import { NameBar, StatBar, Inspiration } from './CSheetDivs/DivsIndex'

export default class CSheet extends Component {
    render() {
        return (
            <div class='CSheet'>
                <Inspiration />
                <StatBar />
                <NameBar />
            </div>
        )
    }
}