import {initDirectors} from "../initialState";

export const directorReducer = (state = initDirectors, action) => {
    switch (action.type) {
        case 'ADD_DIRECTOR':
            return [...state, {
                id: action.payload.id,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                age: action.payload.age
            }];
        case 'DELETE_DIRECTOR':
            return state.filter(director => director.id !== action.payload);
        default:
            return state;
    }
}
