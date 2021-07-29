import React from 'react';
import { connect } from 'react-redux';

import './LatestArticle.scss';

import { BBArticle } from '../types/bb-article';
import globalConfig from '../globals/config';
import ArticlePreview from '../globals/article-preview/ArticlePreview';
import { AppState } from '../types/app-state';

type MappedProps = {
    articles: BBArticle[];
};

type DispatchProps = {

};

class LatestArticles extends React.Component<MappedProps> {
    private numOfArticlePreviews: number = globalConfig.home.numOfArticlePreviews;

    render() {
        if (this.props.articles && this.props.articles.length) {
            const articlePreviewElems = this.props.articles.slice(0, this.numOfArticlePreviews - 1)
                .map((article: BBArticle, index: number) =>
                    <ArticlePreview key={`bb-articlePreview-${index}`}
                        slug={article.meta.slug}/>
                );

            return (
                <div className="bb-latestArticles">
                    <h3>Recent Articles</h3>
                    {articlePreviewElems}
                </div>
            );
        } else {
            return null;
        }
    }

    static mapStateToProps(state: AppState): MappedProps {
        return {
            articles: state.articles.list
        };
    }
}

const dispatchProps: DispatchProps = {

};

export default connect(LatestArticles.mapStateToProps, dispatchProps)(LatestArticles);