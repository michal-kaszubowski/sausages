import {initDirectors} from "../../initialState";

export const directorReducer = (state = initDirectors, action) => {
    switch (action.type) {
        case 'ADD_DIRECTOR':
            return {...state, directors: [...state.directors, action.payload]};
        default:
            return state;
    }
}
