import {createStore, applyMiddleware} from 'redux';
import * as reducers from './reducers/index';
import thunk from 'redux-thunk';
import { middleware as reduxPackMiddleware } from 'redux-pack';

export default createStore(
  reducers.pomoReducer,
  applyMiddleware(thunk, reduxPackMiddleware)
);
