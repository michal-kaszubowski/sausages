import {createStore, applyMiddleware} from "redux";
import {reducer} from "./reducers";
import {logger} from "./middlewares";

export const store = createStore(reducer, applyMiddleware(logger));
