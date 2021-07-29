import { Moment } from 'moment';

export type BBArticleRaw = {
    content: string,
    meta: {
        creationDate: string,
        lastEdited: string,
        tags: string[],
        title: string,
        publishDate: string
    }
};

export type BBArticle = {
    content: string,
    meta: {
        creationDate: Moment,
        lastEdited: Moment,
        tags: string[],
        title: string,
        publishDate: Moment,
        slug: string
    }
};

export type BBArticleRawMap = {
    [key: string]: BBArticleRaw
};

export type BBArticleMap = {
    [key: string]: BBArticle
};

export type BBArticlePreview = BBArticle['meta'];