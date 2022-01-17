import {initialState} from "./initialState";

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_PACK':
            return { ...state, packs: [...state.packs.reduce(
                        (acc=[], curr) => {
                            if (curr.addressee === action.payload.addressee) {
                                curr.items['b'] = action.payload
                                return [...acc, curr]
                            } else {
                                return [...acc, curr]
                            }
                        }
                    )]}
        default:
            return state;
    }
}