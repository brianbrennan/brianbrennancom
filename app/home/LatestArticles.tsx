import React from 'react';
import { connect } from 'react-redux';

import './LatestArticles.scss';

import { BBArticle } from '../types/bb-article';
import { loadArticles } from '../article/article-actions';
import ArticlePreview from '../globals/article-preview/ArticlePreview';
import { AppState } from '../types/app-state';
import { selectArticlesByDate } from '../article/article-reducer';

type OwnProps = {
    numOfArticlePreviews: number
};

type MappedProps = {
    articles: BBArticle[];
};

type DispatchProps = {
    loadArticles: typeof loadArticles
};

class LatestArticles extends React.Component<MappedProps & DispatchProps> {
    componentDidMount() {
        this.props.loadArticles();
    }

    render() {
        if (this.props.articles && this.props.articles.length) {
            const articlePreviewElems = this.props.articles
                .map((article: BBArticle, index: number) =>
                    <ArticlePreview key={`bb-articlePreview-${index}`}
                                    slug={article.meta.slug}/>
                );

            return (
                <div className="bb-latestArticles">
                    <div className="bb-mediumWrapper">
                        <h3 className="bb-latestArticles-title">Recent Articles</h3>
                        <div className="bb-latestArticles-articlePreviews">
                            {articlePreviewElems}
                        </div>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }

    static mapStateToProps(state: AppState, ownProps: OwnProps): MappedProps {
        return {
            articles: selectArticlesByDate(state).slice(0, ownProps.numOfArticlePreviews - 1)
        };
    }
}

const dispatchProps: DispatchProps = {
    loadArticles
};

export default connect(LatestArticles.mapStateToProps, dispatchProps)(LatestArticles);