export const todoReducer = (state = { todos: [], notes: [] }, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return { ...state, todos: [ ...state, action.payload ] };
        case 'DELETE_TODO':
            return { ...state, todos: [ ...state.todos.filter(todo => todo.id !== action.payload.id) ] };
        case 'UPDATE_TODO':
            return { ...state, todos: [ ...state.todos.reduce(
                    (acc = [], curr) =>
                        curr.id === action.payload.id
                            ? [ ...acc, { ...curr, title: action.payload.title } ]
                            : [ ...acc, curr ]
                ) ] };
        case 'FINISH_TODO':
            return { ...state, todos: [ ...state.todos.reduce(
                    (acc = [], curr) =>
                        curr.id === action.payload.id
                            ? [ ...acc, { ...curr, done: true }]
                            : [ ...acc, curr ]
                ) ] };
        default:
            return state;
    }
}