export const TodoReducer = (state = {todos: []}, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {...state, todos: [...state.todos, action.payload]};
        case 'UPDATE_TODO':
            return {
                ...state, todos: state.todos.reduce(
                    (prev, curr) => {
                        if (curr.id === action.payload.id) {
                            return prev.concat([{
                                ...curr,
                                date: action.payload.date,
                                name: action.payload.name,
                                done: action.payload.done
                            }]);
                        } else {
                            return prev.concat([curr]);
                        }
                    }, []
                )
            };
        case 'FINISH_TODO':
            return {
                ...state, todos: state.todos.reduce(
                    (prev, curr) => {
                        if (curr.id === action.payload.id) {
                            return prev.concat([{...curr, done: true}]);
                        } else {
                            return prev.concat([curr]);
                        }
                    }, []
                )
            };
        case 'DELETE_TODO':
            return {
                ...state, todos: state.todos.filter(todo => todo.id !== action.payload.id)
            };
        default:
            return state;
    }
}