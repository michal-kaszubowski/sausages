import React from 'react';
import ReactDOM from 'react-dom';
import {store} from "./ducks/store";
import {Provider} from 'react-redux';
import App from './App';

store.subscribe(() => console.log("Current state: ", store.getState()));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
