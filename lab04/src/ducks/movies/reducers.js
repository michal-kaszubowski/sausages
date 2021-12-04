import {initMovies} from "../initialState";

export const movieReducer = (state = initMovies, action) => {
    switch (action.type) {
        case 'ADD_MOVIE':
            return [...state, {
                id: action.payload.id,
                title: action.payload.title,
                year: action.payload.year
            }];
        default:
            return state;
    }
}
