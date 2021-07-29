import moment from 'moment';

import { BBArticle, BBArticleMap, BBArticleRaw, BBArticleRawMap } from '../types/bb-article';
import blogRaw from './../../blog.json';

export const LOAD_ARTICLE_INIT = 'LOAD_ARTICLE_INIT';
export const LOAD_ARTICLE_SUCCESS = 'LOAD_ARTICLE_SUCCESS';
export const LOAD_ARTICLE_FAIL = 'LOAD_ARTICLE_FAIL';
export const LOAD_ARTICLES_INIT = 'LOAD_ARTICLES_INIT';
export const LOAD_ARTICLES_SUCCESS = 'LOAD_ARTICLES_SUCCESS';
export const LOAD_ARTICLES_FAIL = 'LOAD_ARTICLES_FAIL';

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
    slug: string,
    article: BBArticle
};

export const loadArticleSuccess = (slug: string, article: BBArticle): LoadArticleSuccess => {
    return {
        type: LOAD_ARTICLE_SUCCESS,
        slug,
        article
    };
};

export type LoadArticlesInit = {
    type: string
};

export const loadArticlesInit = (): LoadArticlesInit => {
    return {
        type: LOAD_ARTICLES_INIT
    };
};

export type LoadArticlesSuccess = {
    type: string,
    articles: BBArticleMap
};

export const loadArticlesSuccess = (articles: BBArticleMap): LoadArticlesSuccess => {
    return {
        type: LOAD_ARTICLES_SUCCESS,
        articles
    };
};


export type ArticleActions = LoadArticleInit | LoadArticleSuccess |
    LoadArticlesInit | LoadArticlesSuccess;

/** Dispatched Actions */

export const loadArticle = (slug: string) => {
    return (dispatch: Function) => {
        dispatch(loadArticleInit(slug));
        const rawArticle = (blogRaw as BBArticleRawMap)[slug];

        const blogArticle = treatRawArticle(slug, rawArticle);

        dispatch(loadArticleSuccess(slug, blogArticle));
    };
};

export const loadArticles = () => {
    return (dispatch: Function) => {
        dispatch(loadArticlesInit());
        const rawArticles = (blogRaw as BBArticleRawMap);
        let treatedArticlesMap: BBArticleMap = {};
        Object.keys(rawArticles).forEach(key => {
            treatedArticlesMap[key] = treatRawArticle(key, rawArticles[key]);
        });

        dispatch(loadArticlesSuccess(treatedArticlesMap));
    };
};

const treatRawArticle = (slug: string, rawArticle: BBArticleRaw): BBArticle => {
    return {
        ...rawArticle,
        meta: {
            ...rawArticle.meta,
            creationDate: moment(rawArticle.meta.creationDate),
            lastEdited: moment(rawArticle.meta.lastEdited),
            publishDate: moment(rawArticle.meta.publishDate),
            slug
        }
    };
};