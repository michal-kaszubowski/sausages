import {reducer} from "./reducers";
import {createStore, applyMiddleware} from 'redux';
import {logger} from "./middlewares";

export const store = createStore(reducer, applyMiddleware(logger));
