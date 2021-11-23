// Movies:

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

//  Directors:

export const addDirector = payload => ({
    type: 'ADD_DIRECTOR',
    payload
});

export const deleteDirector = payload => ({
    type: 'DELETE_DIRECTOR',
    payload
});

export const updateDirector = payload => ({
    type: 'UPDATE_DIRECTOR',
    payload
});