import React from 'react';

import './ProjectCard.scss';

type Props = {
    url: string,
    image: string,
    name: string,
    width: number
};

export default class ProjectCard extends React.Component<Props> {
    render() {
        return (
            <div className="bb-projectCard">
                <a href={this.props.url} target="_blank">
                    <img src={this.props.image} alt={this.props.name} width={this.props.width}/>
                </a>
            </div>
        );
    }
}