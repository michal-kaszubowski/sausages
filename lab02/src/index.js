import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {Provider} from "react-redux";
import {combineReducers} from "redux";
import {todoReducer} from "./reducers/todoReducer";
import {noteReducer} from "./reducers/noteReducer";
const Redux = require('redux');

const store = Redux.createStore( combineReducers( { todos: todoReducer, notes: noteReducer } ) );

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
