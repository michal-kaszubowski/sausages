const initMovies = [
        {
            id: "733cf3a0-dc02-4efd-8dd8-40f383ec2ce6",
            title: "Phineas and Ferb",
            year: 2007
        },
        {
            id: "a147b13d-3c35-4f3a-ba27-7b3d9f6a699e",
            title: "Kim Possible",
            year: 2002
        },
        {
            id: "f5525d27-cddb-410e-941f-1bbf17772ece",
            title: "Gravity Falls",
            year: 2012
        },
        {
            id: "4c708b9c-b6b5-49ae-bcc1-6a28a84132b0",
            title: "Amphibia",
            year: 2019
        }
    ]

const initDirectors = {
    directors: [
        {
            id: "b223ed54-faa4-42d7-9fa6-f7fd6e49894c",
            firstName: "Dan",
            lastName: "Povenmire",
            age: 58
        },
        {
            id: "f8f59b34-8815-488f-ab1c-34f761bdacdd",
            firstName: "Jeff",
            lastName: "Marsh",
            age: 60
        },
        {
            id: "449f6025-183f-40c7-98e6-7bc7428385ef",
            firstName: "Alex",
            lastName: "Hirsch",
            age: 36
        }
    ]
}

export const MovieReducer = (state = initMovies, action) => {
    switch (action.type) {
        case 'ADD_MOVIE':
            return {...state, movies: [...state.movies, action.payload]};
        case 'ADD_DIRECTOR':
            return {...state, directors: [...state.directors, action.payload]};
        default:
            return state;
    }
}
