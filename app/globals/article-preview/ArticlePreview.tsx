import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

import './ArticlePreview.scss';

import { BBArticle } from '../../types/bb-article';
import globalConfig from '../../globals/config';
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
                    <a href={`/a/${this.props.article.meta.slug}`}>
                        <p className="bb-articlePreview-title">{this.props.article.meta.title}</p>
                        <p className="bb-articlePreview-publishDate">
                            {moment(this.props.article.meta.publishDate).format(globalConfig.helpers.dateFormat)}
                        </p>
                    </a>
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