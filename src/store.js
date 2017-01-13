import {createStore} from 'redux';
import * as reducers from './reducers/index';

export default createStore(reducers.pomoReducer);
