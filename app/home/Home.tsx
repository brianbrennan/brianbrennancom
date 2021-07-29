import React from 'react';

import './Home.scss';

import Landing from './Landing';
import globalConfig from '../globals/config';
import LatestArticles from './LatestArticles';

export default class Home extends React.Component {
    private numOfArticlePreviews = globalConfig.home.numOfArticlePreviews;

    render() {
        return(
            <div className="bb-home">
                <Landing/>
                <LatestArticles numOfArticlePreviews={this.numOfArticlePreviews}/>
            </div>
        );
    }
}