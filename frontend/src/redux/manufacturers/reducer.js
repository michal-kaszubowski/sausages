export const manufacturerReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_MANUFACTURERS':
            return action.payload;
        case 'UPDATE_MANUFACTURER':
            // Requires full Manufacturer object
            return state.reduce((prev, curr) => {
                curr._id === action.payload._id
                    ? prev.push(action.payload)
                    : prev.push(curr);
                return prev;
            }, []);
        case 'DELETE_MANUFACTURER':
            return state.filter(manufacturer => manufacturer._id !== action.payload._id);
        default:
            return state;
    }
}
