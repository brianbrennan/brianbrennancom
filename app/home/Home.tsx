import React from 'react';

import './Home.scss';

import Landing from './Landing';
import globalConfig from '../globals/config';
import LatestArticles from './LatestArticles';
import ProjectsSection from './ProjectsSection';

export default class Home extends React.Component {
    private numOfArticlePreviews = globalConfig.home.numOfArticlePreviews;

    render() {
        return(
            <div className="bb-home">
                <Landing/>
                <ProjectsSection/>
                <LatestArticles numOfArticlePreviews={this.numOfArticlePreviews}/>
            </div>
        );
    }
}