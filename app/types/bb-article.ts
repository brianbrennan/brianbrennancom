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
        publishDate: Moment
    }
};

export type BBArticleRawMap = {
    [key: string]: BBArticle
};

export type BBArticleMap = {
    [key: string]: BBArticle
};