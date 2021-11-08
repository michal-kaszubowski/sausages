import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {Provider} from "react-redux";
const Redux = require('redux');

/* Action templates:
 * {type: <type>, payload: {id: <id>, title: <title>, done: <done>}}
 */

const initState = {
    todos: [],
    notes: []
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return { ...state, todos: [ ...state, action.payload ] };
        case 'DELETE_TODO':
            return { ...state, todos: [ ...state.todos.filter(todo => todo.id !== action.payload.id) ] };
        case 'UPDATE_TODO':
            return { ...state, todos: [ ...state.todos.reduce(
                    (acc = [], curr) =>
                        curr.id === action.payload.id
                            ? [ ...acc, { ...curr, title: action.payload.title }]
                            : [ ...acc, curr ]
                ) ] };
        case 'FINISH_TODO':
            return { ...state, todos: [ ...state.todos.reduce(
                    (acc = [], curr) =>
                        curr.id === action.payload.id
                            ? [ ...acc, { ...curr, done: true }]
                            : [ ...acc, curr ]
                ) ] };
        case 'ADD_NOTE':
            return { ...state, notes: [ ...state, action.payload ] };
        case 'DELETE_NOTE':
            return { ...state, notes: [ ...state.notes.filter(note => note.id !== action.payload.id) ] };
        default:
            return state;
    }
}

const store = Redux.createStore(reducer)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
