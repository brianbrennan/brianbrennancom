import React from 'react';
import RepoCard from "react-repo-card";


import './ProjectsSection.scss';

export default class ProjectsSection extends React.Component {
    render() {
        return (
            <div className="bb-projectsSection">
                <h3 className="bb-projectsSection-title">My Projects</h3>
                <div className="bb-projectsWrapper bb-mediumWrapper">
                    <div className="bb-projectCard">
                        <RepoCard username="brianbrennan" repository="itsablog"/>
                    </div>
                </div>
            </div>
        );
    }
}