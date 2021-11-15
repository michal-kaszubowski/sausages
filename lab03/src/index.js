import React from "react";
import * as ReactDOM from "react-dom";
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {TodoReducer} from "./TodoReducer";
import App from "./App";

let store = createStore(TodoReducer);
store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();