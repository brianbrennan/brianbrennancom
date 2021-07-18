import React from 'react';

import './MainHeader.scss';

export default class MainHeader extends React.Component {
    render() {
        return (
            <div className="bb-mediumWrapper">
                <div className="bb-mainHeader">
                    <div className="bb-mainHeader-logo">
                        Brian Brennan
                    </div>
                    <div className="bb-mainHeader-nav">
                        <ul>
                            <li>Home</li>
                            <li>Articles</li>
                            <li>About</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}