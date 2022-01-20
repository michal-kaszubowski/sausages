export const manufacturerReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_MANUFACTURERS':
            return action.payload;
        case 'DELETE_MANUFACTURER':
            return state.filter(manufacturer => manufacturer._id !== action.payload._id);
        default:
            return state;
    }
}
