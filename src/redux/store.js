// src/redux/store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { coursesReducer } from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;