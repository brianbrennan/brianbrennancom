// reducers.js
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router';

const mainReducer = (history: any) => combineReducers({
    router: connectRouter(history)
});

export default mainReducer;