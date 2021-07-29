import React from 'react';
import { connect } from 'react-redux';

import './ArticlePreview.scss';

import { BBArticle } from '../../types/bb-article';
import { AppState } from '../../types/app-state';

type OwnProps = {
    slug: string
};

type MappedProps = {
    article?: BBArticle
};

class ArticlePreview extends React.Component<OwnProps & MappedProps> {
    render() {
        if (this.props.article) {
            return (
                <div className="bb-articlePreview">
                    {this.props.article.meta.title}
                </div>
            );
        } else {
            return null;
        }
    }

    static mapStateToProps(state: AppState, ownProps: OwnProps): MappedProps {
        return {
            article: state.articles.bySlug[ownProps.slug]
        };
    }
}

export default connect(ArticlePreview.mapStateToProps)(ArticlePreview);