export const sausageReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_SAUSAGES':
            return action.payload;
        case 'DELETE_SAUSAGE':
            return state.filter(sausage => sausage._id !== action.payload._id);
        case 'ADD_SPICE_TO_SAUSAGE':
            return state.reduce((prev, curr) => {
                curr._id === action.payload._id
                    ? prev.push({...curr, spice: action.payload.spice})
                    : prev.push(curr)
                return prev
            }, []);
        default:
            return state;
    }
}
