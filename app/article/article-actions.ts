import { BBArticle } from '../types/bb-article';

export const LOAD_ARTICLE_INIT = 'LOAD_ARTICLE_INIT';
export const LOAD_ARTICLE_SUCCESS = 'LOAD_ARTICLE_SUCCESS';
export const LOAD_ARTICLE_FAIL = 'LOAD_ARTICLE_FAIL';

export type LoadArticleInit = {
    type: string,
    slug: string
};

export const loadArticleInit = (slug: string): LoadArticleInit => {
    return {
        type: LOAD_ARTICLE_INIT,
        slug
    };
};

export type LoadArticleSuccess = {
    type: string,
    article: BBArticle
};

export const loadArticleSuccess = (article: BBArticle): LoadArticleSuccess => {
    return {
        type: LOAD_ARTICLE_SUCCESS,
        article
    };
};

export type ArticleActions = LoadArticleInit | LoadArticleSuccess;