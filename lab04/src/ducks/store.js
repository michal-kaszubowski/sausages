import {combineReducers, createStore, applyMiddleware} from "redux";
import {movieReducer} from "./movies/reducers";
import {directorReducer} from "./directors/reducers";

const oneReducer = combineReducers({
    movies: movieReducer,
    directors: directorReducer
});

const logger = store => next => action => {
    console.group(action.type)
    console.info('Dispatching action:', action)
    const result = next(action)
    console.log('Next state:', store.getState())
    console.groupEnd()
    return result
}

export const store = createStore(oneReducer, applyMiddleware(logger));
