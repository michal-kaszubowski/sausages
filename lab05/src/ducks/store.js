import {createStore, applyMiddleware} from "redux";
import {reducer} from "./reducers";
import {logger, watcher, counter} from "./middlewares";

export const store = createStore(reducer, applyMiddleware(logger, watcher, counter));
