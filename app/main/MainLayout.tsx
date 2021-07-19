import React from 'react';

import './MainLayout.scss';

import MainHeader from './MainHeader';
import MainFooter from './MainFooter';

export default class MainLayout extends React.Component {
    render() {
        return (
            <div className="bb-mainLayout">
                <MainHeader/>
                {this.props.children}
                <MainFooter/>
            </div>
        );
    }
}