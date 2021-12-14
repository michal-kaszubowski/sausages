import {createStore, applyMiddleware} from "redux";
import {reducer} from "./reducers";
import {logger, watcher} from "./middlewares";

export const store = createStore(reducer, applyMiddleware(logger, watcher));
