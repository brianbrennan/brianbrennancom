import { createHashHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import mainReducer from './main-reducer';

export const hashHistory = createHashHistory();
const loggerMiddleware = createLogger();

const store = createStore(
    mainReducer(hashHistory), // root reducer with router state
    compose(
        applyMiddleware(
            routerMiddleware(hashHistory), // for dispatching history actions
            thunkMiddleware, loggerMiddleware,
        ),
    ),
);

export default store;