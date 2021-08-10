import React from 'react';
import RepoCard from "react-repo-card";

import './ProjectsSection.scss';

import ProjectCard from '../globals/project-cards/ProjectCard';

export default class ProjectsSection extends React.Component {
    render() {
        return (
            <div className="bb-projectsSection">
                <h3 className="bb-projectsSection-title">My Projects</h3>
                <div className="bb-projectsWrapper bb-mediumWrapper">
                    <div className="bb-repoCard">
                        <RepoCard username="brianbrennan" repository="itsablog"/>
                    </div>
                    <ProjectCard image="/lib/grudgeharbor.png" name="Grudge Harbor" url="https://www.grudgeharbor.com" width={100}/>
                    <ProjectCard image="/lib/boltbird.png" name="Bolt Bird" url="https://boltbird.com" width={160}/>
                </div>
            </div>
        );
    }
}

