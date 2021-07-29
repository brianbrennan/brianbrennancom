import moment from 'moment';

import { BBArticle, BBArticleMap } from '../types/bb-article';
import { ArticleActions,
    LOAD_ARTICLE_SUCCESS, LoadArticleSuccess,
    LOAD_ARTICLES_SUCCESS, LoadArticlesSuccess } from './article-actions';
import { AppState } from '../types/app-state';

export type ArticleReducerState = {
    byList: BBArticle[],
    bySlug: BBArticleMap
};

const InitArticleReducerState: ArticleReducerState = {
    byList: [],
    bySlug: {}
};

const articleReducer = (state: ArticleReducerState = InitArticleReducerState, action: ArticleActions): ArticleReducerState => {
    switch(action.type) {
        case LOAD_ARTICLE_SUCCESS:
            return handleLoadArticleSuccess(state, action as LoadArticleSuccess);
        case LOAD_ARTICLES_SUCCESS:
            return handleLoadArticlesSuccess(state, action as LoadArticlesSuccess);
        default:
            return state;
    }
};

const handleLoadArticleSuccess = (state: ArticleReducerState, action: LoadArticleSuccess): ArticleReducerState => {
    let newState = {
            ...state,
            bySlug: {
                ...state.bySlug,
                [action.slug]: action.article
            }
        },
        isDupe = false;

    newState.byList.forEach((article, index) => {
        if (article.meta.slug && article.meta.slug === action.slug) {
            newState.byList[index] = action.article;
            isDupe = true;
        }
    });

    if (!isDupe) {
        newState.byList.push(action.article);
    }

    return newState;
};

const handleLoadArticlesSuccess = (state: ArticleReducerState, action: LoadArticlesSuccess): ArticleReducerState => {
    return {
        ...state,
        bySlug: action.articles,
        byList: Object.keys(action.articles).map(key => action.articles[key])
    };
};

/** Selectors */

export const selectArticlesByDate = (state: AppState): BBArticle[] => {
    return state.articles.byList.sort((a: BBArticle, b: BBArticle) => {
        return moment(a.meta.publishDate).isBefore(b.meta.publishDate) ? 1 : -1;
    });
};

export default articleReducer;