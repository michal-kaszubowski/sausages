export const manufacturerReducer = (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_MANUFACTURERS':
            return [action.payload];
        case 'ADD_MANUFACTURER':
            return [...state, {
                id: action.payload.id,
                name: action.payload.name,
                origin: action.payload.origin,
                established: action.payload.established
            }];
        case 'UPDATE_MANUFACTURER':
            // Requires full Manufacturer object
            return state.reduce((prev, curr) => {
                curr.id === action.payload.id
                    ? prev.push(action.payload)
                    : prev.push(curr);
                return prev;
            }, []);
        case 'DELETE_MANUFACTURER':
            return state.filter(manufacturer => manufacturer.id !== action.payload);
        default:
            return state;
    }
}
