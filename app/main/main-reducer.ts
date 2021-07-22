// reducers.js
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router';

import articleReducer from '../article/article-reducer';

const mainReducer = (history: any) => combineReducers({
    articles: articleReducer,
    router: connectRouter(history)
});

export default mainReducer;