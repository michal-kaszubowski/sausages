export const spiceReducer = (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_SPICES':
            return [action.payload];
        case 'ADD_SPICE':
            return [...state, {
                id: action.payload.id,
                name: action.payload.name,
                origin: action.payload.origin
            }];
        case 'UPDATE_SPICE':
            // Requires full Manufacturer object
            return state.reduce((prev, curr) => {
                curr.id === action.payload.id
                    ? prev.push(action.payload)
                    : prev.push(curr);
                return prev;
            }, []);
        case 'DELETE_SPICE':
            return state.filter(manufacturer => manufacturer.id !== action.payload);
        default:
            return state;
    }
}
