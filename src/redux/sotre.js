/* eslint-disable prettier/prettier */
import { combineReducers,createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { listItemReducer,listReducer } from './reducer/index';

const reducer = combineReducers({
    listReducer,
    listItemReducer
})

export const store = createStore(reducer,applyMiddleware(thunk));
