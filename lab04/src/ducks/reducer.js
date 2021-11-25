export const reducer = (state = {movies: [], directors: []}, action) => {
    switch (action.type) {
        case 'ADD_MOVIE':
            return {...state, movies: [...state.movies, action.payload]};
        case 'ADD_DIRECTOR':
            return {...state, directors: [...state.directors, action.payload]};
        default:
            return null
    }
}
