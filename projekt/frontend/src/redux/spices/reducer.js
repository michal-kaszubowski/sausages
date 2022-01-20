export const spiceReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_SPICES':
            return action.payload;
        case 'UPDATE_SPICE':
            return state.reduce((prev, curr) => {
                curr._id === action.payload._id
                    ? prev.push(action.payload)
                    : prev.push(curr);
                return prev;
            }, []);
        case 'DELETE_SPICE':
            return state.filter(spice => spice._id !== action.payload._id);
        default:
            return state;
    }
}
