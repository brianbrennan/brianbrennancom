import React from 'react';

import './Landing.scss'

export default class Landing extends React.Component {
    render() {
        return(
            <div className="bb-landing">
                <div className="bb-landing-stripe">
                    <div className="bb-landing-stripe-level1"/>
                    <div className="bb-landing-stripe-level2"/>
                    <div className="bb-landing-stripe-level3"/>
                    <div className="bb-landing-stripe-level4"/>
                </div>
                <div className="bb-landing-title">
                    <h3>Brian <br/>Brennan</h3>
                    <h1>Web Developer & Blogger</h1>
                </div>
            </div>
        );
    }
}
