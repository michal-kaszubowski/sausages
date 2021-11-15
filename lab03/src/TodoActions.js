export const addTodo = payload => ({
    type: 'ADD_TODO',
    payload
});

export const updateTodo = payload => ({
    type: 'UPDATE_TODO',
    payload
});

export const finishTodo = payload => ({
    type: 'FINISH_TODO',
    payload
});