export const addMovie = payload => ({
    type: 'ADD_MOVIE',
    payload
});

export const deleteMovie = payload => ({
    type: 'DELETE_MOVIE',
    payload
});

export const updateMovie = payload => ({
    type: 'UPDATE_MOVIE',
    payload
});

export const addDirectorToMovie = payload => ({
    type: 'ADD_DIRECTOR_TO_MOVIE',
    payload
});
