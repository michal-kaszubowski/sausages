export const noteReducer = (state = { todos: [], notes: [] }, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return { ...state, notes: [ ...state, action.payload ] };
        case 'DELETE_NOTE':
            return { ...state, notes: [ ...state.notes.filter(note => note.id !== action.payload.id) ] };
        default:
            return state;
    }
}