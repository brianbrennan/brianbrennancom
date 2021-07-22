import React from 'react';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';

import './Article.scss';

import { BBArticle } from '../types/bb-article';
import { loadArticle } from './article-actions';
import { AppState } from '../types/app-state';

type OwnProps = RouteComponentProps;

type MappedProps = {
    article: BBArticle;
    slug: string;
};

type DispatchProps = {
    loadArticle: typeof loadArticle;
};

class Article extends React.Component<OwnProps & MappedProps & DispatchProps> {
    componentDidMount() {
        this.props.loadArticle(this.props.slug)
    }

    render() {
        return (
            <div className="bb-article">
                {this.props.slug}
            </div>
        );
    }

    static mapStateToProps(state: AppState, ownProps: OwnProps): MappedProps {
        return {
            article: state.articles.articlesById[ownProps.location],
            slug: ownProps.location.pathname
        };
    }
}

const mapDispatchToProps = {
    loadArticle
};

export default connect(Article.mapStateToProps, mapDispatchToProps)(Article);