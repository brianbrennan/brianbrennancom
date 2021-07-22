import { BBArticle, BBArticleMap } from '../types/bb-article';
import { ArticleActions, LOAD_ARTICLE_SUCCESS,
            LoadArticleSuccess } from './article-actions';

export type ArticleReducerState = {
    articles: BBArticle[],
    articlesById: BBArticleMap
};

const InitArticleReducerState: ArticleReducerState = {
    articles: [],
    articlesById: {}
};

const articleReducer = (state: ArticleReducerState = InitArticleReducerState, action: ArticleActions): ArticleReducerState => {
    switch(action.type) {
        case LOAD_ARTICLE_SUCCESS:
            return handleLoadArticleSuccess(state, action as LoadArticleSuccess);
        default:
            return state;
    }
};

const handleLoadArticleSuccess = (state: ArticleReducerState, action: LoadArticleSuccess): ArticleReducerState => {
    return state;
};

export default articleReducer;