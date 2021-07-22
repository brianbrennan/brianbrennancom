import React from 'react';

import './MainHeader.scss';

export default class MainHeader extends React.Component {
    render() {
        return (
            <div className="bb-mainHeader">
                <div className="bb-mediumWrapper">
                    <div className="bb-mainHeader-flex">
                        <div className="bb-mainHeader-logo">
                            Brian Brennan
                        </div>
                        <div className="bb-mainHeader-nav">
                            <ul>
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="/">Articles</a>
                                </li>
                                <li>
                                    <a href="/">About</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}