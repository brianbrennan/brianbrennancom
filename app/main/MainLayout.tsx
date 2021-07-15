import React from 'react';

import './MainLayout.scss';

import MainFooter from './MainFooter';

export default class MainLayout extends React.Component {
    render() {
        return (
            <div className="bb-mainLayout">
                <MainFooter/>
            </div>
        )
    }
}