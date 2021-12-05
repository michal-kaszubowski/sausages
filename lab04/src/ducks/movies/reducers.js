import {initMovies} from "../initialState";

export const movieReducer = (state = initMovies, action) => {
    switch (action.type) {
        case 'ADD_MOVIE':
            return [...state, {
                id: action.payload.id,
                title: action.payload.title,
                year: action.payload.year,
                director: {}
            }];
        case 'DELETE_MOVIE':
            return state.filter(movie => movie.id !== action.payload);
        case 'ADD_DIRECTOR_TO_MOVIE':
            return state.reduce((prev, curr) => {
                curr.id === action.payload.id
                    ? prev.push({...curr, director: action.payload.director})
                    : prev.push(curr)
                return prev
            }, []);
        default:
            return state;
    }
}
