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
        if (this.props.article) {
            return (
                <div className="bb-article-wrapper">

                    <article className="bb-article">
                        <div className="bb-mediumWrapper">
                            <h1 className="bb-article-title">
                                {this.props.article.meta.title}
                            </h1>
                        </div>
                        <div className="bb-thinWrapper">
                            <section className="bb-article-body" dangerouslySetInnerHTML={{__html: this.props.article.content}}/>
                        </div>
                    </article>

                </div>
            );
        } else {
            return null;
        }
    }

    static mapStateToProps(state: AppState, ownProps: OwnProps): MappedProps {
        const splitLoc = ownProps.location.pathname.split('/');
        const slug = splitLoc[splitLoc.length - 1];

        return {
            article: state.articles.bySlug[slug],
            slug
        };
    }
}

const mapDispatchToProps = {
    loadArticle
};

export default connect(Article.mapStateToProps, mapDispatchToProps)(Article);