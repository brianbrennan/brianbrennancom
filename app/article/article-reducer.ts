import { BBArticle, BBArticleMap } from '../types/bb-article';
import { ArticleActions, LOAD_ARTICLE_SUCCESS,
            LoadArticleSuccess } from './article-actions';

export type ArticleReducerState = {
    list: BBArticle[],
    bySlug: BBArticleMap
};

const InitArticleReducerState: ArticleReducerState = {
    list: [],
    bySlug: {}
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
    let newState = {
            ...state,
            bySlug: {
                ...state.bySlug,
                [action.slug]: action.article
            }
        },
        isDupe = false;

    newState.list.forEach((article, index) => {
        if (article.meta.slug && article.meta.slug === action.slug) {
            newState.list[index] = action.article;
            isDupe = true;
        }
    });

    if (!isDupe) {
        newState.list.push(action.article);
    }

    return newState;
};

export default articleReducer;