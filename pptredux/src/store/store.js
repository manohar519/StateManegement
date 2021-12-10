import {createStore, applyMiddleware} from 'redux';
import logger from "redux-logger";
import reducer from '../Reducer/reducer';

const store= createStore(reducer,applyMiddleware(logger))

export default store;