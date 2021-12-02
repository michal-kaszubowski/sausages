import {initMovies} from "../../initialState";

export const movieReducer = (state = initMovies, action) => {
    switch (action.type) {
        case 'ADD_MOVIE':
            return {...state, movies: [...state.movies, action.payload]};
        default:
            return state;
    }
}
