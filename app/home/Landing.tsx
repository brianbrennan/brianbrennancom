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

            </div>
        );
    }
}
