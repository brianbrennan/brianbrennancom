import React from 'react';
import { RouteComponentProps } from 'react-router';

import './Article.scss';

type OwnProps = RouteComponentProps;

export default class Article extends React.Component<OwnProps> {
    render() {
        return (
            <div className="bb-article">
                {this.props.location.pathname}
            </div>
        );
    }
}