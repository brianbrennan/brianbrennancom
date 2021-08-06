import React from 'react';
import { RouteComponentProps } from 'react-router';
import moment from 'moment';
import Highlight from 'react-highlight';
import { connect } from 'react-redux';

import './Article.scss';
import './../../lib/typeset.css';

import { BBArticle } from '../types/bb-article';
import { loadArticle } from './article-actions';
import globalConfig from '../globals/config';
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
                            <p className="bb-article-publishDate">
                                {moment(this.props.article.meta.publishDate).format(globalConfig.helpers.dateFormat)}
                            </p>
                            <h1 className="bb-article-title">
                                {this.props.article.meta.title}
                            </h1>
                            {this.renderTags()}
                        </div>
                        <div className="bb-thinWrapper">
                            <Highlight className="bb-article-body" innerHTML={true}>
                                {this.props.article.content}
                            </Highlight>
                        </div>
                    </article>

                </div>
            );
        } else {
            return null;
        }
    }

    renderTags() {
        const tagElems = this.props.article.meta.tags.map((tag, index) =>
            <div className="bb-article-tag" key={`bb-articleTag-${index}`}>
                {tag}
            </div>
        );

        return (
            <div className="bb-article-tags">
                {tagElems}
            </div>
        );
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