import {combineReducers, createStore} from "redux";
import {movieReducer} from "./movies/reducers";
import {directorReducer} from "./directors/reducers";

const oneReducer = combineReducers({
    movies: movieReducer,
    directors: directorReducer
});

export const store = createStore(oneReducer);
