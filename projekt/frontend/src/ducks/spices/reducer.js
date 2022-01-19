export const spiceReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_SPICES':
            return action.payload;
        case 'DELETE_SPICE':
            return state.filter(manufacturer => manufacturer.id !== action.payload._id);
        default:
            return state;
    }
}
