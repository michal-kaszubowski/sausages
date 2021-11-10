export const TodoReducer = (state = {todos: []}, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {...state, todos: [...state, action.payload]};
        default:
            return state;
    }
}