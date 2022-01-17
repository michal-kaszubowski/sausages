export const sausageReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_SAUSAGES':
            return action.payload;
        case 'ADD_SAUSAGE':
            return [...state, {
                id: action.payload.id,
                type: action.payload.type,
                origin: action.payload.origin,
                price: action.payload.price,
                image: action.payload.image,
                manufacturer: action.payload.manufacturer,
                spice: {}
            }];
        case 'UPDATE_SAUSAGE':
            return state.reduce((prev, curr) => {
                curr.id === action.payload.id
                    ? prev.push(action.payload)
                    : prev.push(curr);
                return prev;
            }, []);
        case 'DELETE_SAUSAGE':
            return state.filter(sausage => sausage.id !== action.payload);
        case 'ADD_SPICE_TO_SAUSAGE':
            return state.reduce((prev, curr) => {
                curr.id === action.payload.id
                    ? prev.push({...curr, spice: action.payload.spice})
                    : prev.push(curr)
                return prev
            }, []);
        default:
            return state;
    }
}
