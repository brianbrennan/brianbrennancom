import { RouterState} from 'react-router-redux';
import { ArticleReducerState } from '../article/article-reducer';

export type AppState = {
    articles: ArticleReducerState,
    router: RouterState
};