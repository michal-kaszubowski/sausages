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
        default:
            return state;
    }
}
