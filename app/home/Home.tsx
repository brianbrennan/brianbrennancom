import React from 'react';

import './Home.scss';

import Landing from './Landing';

export default class Home extends React.Component {
    render() {
        return(
            <div className="bb-home">
                <Landing/>
            </div>
        );
    }
}