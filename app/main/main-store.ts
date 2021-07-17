import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import mainReducer from './main-reducer';

export const browserHistory = createBrowserHistory();
const loggerMiddleware = createLogger();

const store = createStore(
    mainReducer(browserHistory), // root reducer with router state
    compose(
        applyMiddleware(
            routerMiddleware(browserHistory), // for dispatching history actions
            thunkMiddleware, loggerMiddleware,
        ),
    ),
);

export default store;