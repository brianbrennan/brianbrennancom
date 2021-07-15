import React from 'react';

import './MainFooter.scss';

export default class MainFooter extends React.Component {
    render() {
        return (
            <div className="bb-mainFooter">
                <div className="bb-mainFooter-level1"/>
                <div className="bb-mainFooter-level2"/>
                <div className="bb-mainFooter-level3"/>
                <div className="bb-mainFooter-level4"/>
            </div>
        );
    }
}